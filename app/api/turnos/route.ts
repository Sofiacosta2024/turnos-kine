import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { enviarMailNuevoTurno, enviarMailPaciente } from "@/lib/mail";

const HORA_FIJA = 9;
const DURACION_MIN = 45;

function construirHorario(fechaStr: string) {
  const [y, m, d] = fechaStr.split("-").map(Number);
  const iniciaEn = new Date(y, m - 1, d, HORA_FIJA, 0, 0);
  const terminaEn = new Date(iniciaEn.getTime() + DURACION_MIN * 60000);
  return { iniciaEn, terminaEn };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      nombre, telefono, dni, email, recibeRecordatorios,
      obraSocial, motivo, primeraVez, sesiones, fechas,
    } = body ?? {};

    if (!nombre?.trim()) return NextResponse.json({ error: "Falta el nombre" }, { status: 400 });
    if (!telefono?.trim()) return NextResponse.json({ error: "Falta el telefono" }, { status: 400 });
    if (!dni?.trim()) return NextResponse.json({ error: "Falta el DNI" }, { status: 400 });
    if (!motivo) return NextResponse.json({ error: "Falta el motivo" }, { status: 400 });
    if (!Array.isArray(fechas) || fechas.length === 0) {
      return NextResponse.json({ error: "Debe seleccionar al menos un dia" }, { status: 400 });
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "El correo ingresado no es valido" }, { status: 400 });
    }

    const kinesiologoId = process.env.KINESIOLOGO_ID;
    if (!kinesiologoId) throw new Error("Falta configurar KINESIOLOGO_ID");

    const paciente = await prisma.pacientes.upsert({
      where: { dni: dni.trim() },
      update: {
        nombre: nombre.trim(),
        telefono: telefono.trim(),
        email: email?.trim() || null,
        obraSocial: obraSocial?.trim() || null,
        recibeRecordatorios: Boolean(recibeRecordatorios),
      },
      create: {
        id: crypto.randomUUID(),
        dni: dni.trim(),
        nombre: nombre.trim(),
        telefono: telefono.trim(),
        email: email?.trim() || null,
        obraSocial: obraSocial?.trim() || null,
        recibeRecordatorios: Boolean(recibeRecordatorios),
      },
    });

    const turnosCreados = await Promise.all(
      (fechas as string[]).map(async (fechaStr) => {
        const { iniciaEn, terminaEn } = construirHorario(fechaStr);
        return prisma.turnos.create({
          data: {
            id: crypto.randomUUID(),
            pacienteId: paciente.id,
            kinesiologoId,
            iniciaEn,
            terminaEn,
            motivo,
            estado: "PENDIENTE",
            updatedAt: new Date(),
          },
        });
      })
    );

    let mailEnviado = true;
    try {
      await enviarMailNuevoTurno({
        nombre: paciente.nombre ?? nombre,
        telefono: paciente.telefono ?? telefono,
        obraSocial: paciente.obraSocial,
        motivo,
        primeraVez: Boolean(primeraVez),
        sesiones: Number(sesiones) || 1,
        fechas,
      });
    } catch (mailError) {
      console.error("Error enviando mail de turno:", mailError);
      mailEnviado = false;
    }

    if (paciente.email) {
      try {
        await enviarMailPaciente(
          { email: paciente.email, nombre: paciente.nombre ?? nombre },
          turnosCreados
        );
      } catch (mailError) {
        console.error("Error enviando mail al paciente:", mailError);
      }
    }

    return NextResponse.json({ ok: true, turnos: turnosCreados.map((t) => t.id), mailEnviado });
  } catch (error) {
    console.error("Error creando turno:", error);
    return NextResponse.json({ error: "No se pudo guardar el turno" }, { status: 500 });
  }
}