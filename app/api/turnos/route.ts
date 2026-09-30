import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { enviarMailNuevoTurno, enviarMailPaciente } from "@/lib/mail";
import { construirHorario, getHorariosDelDia } from "@/lib/horarios";

class HorarioOcupadoError extends Error {}

type TurnoPedido = { fecha: string; hora: string };

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      nombre, telefono, dni, email, recibeRecordatorios,
      obraSocial, motivo, primeraVez, sesiones, turnos,
    } = body ?? {};

    if (!nombre?.trim()) return NextResponse.json({ error: "Falta el nombre" }, { status: 400 });
    if (!telefono?.trim()) return NextResponse.json({ error: "Falta el telefono" }, { status: 400 });
    if (!dni?.trim()) return NextResponse.json({ error: "Falta el DNI" }, { status: 400 });
    if (!motivo) return NextResponse.json({ error: "Falta el motivo" }, { status: 400 });
    if (
      !Array.isArray(turnos) || turnos.length === 0 ||
      turnos.some((t) => !/^\d{4}-\d{2}-\d{2}$/.test(t?.fecha ?? "") || !t?.hora)
    ) {
      return NextResponse.json({ error: "Debe seleccionar al menos un dia y horario" }, { status: 400 });
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "El correo ingresado no es valido" }, { status: 400 });
    }

    // Cada hora tiene que existir en los horarios de ese dia
    for (const t of turnos as TurnoPedido[]) {
      const validos = await getHorariosDelDia(t.fecha);
      if (!validos.includes(t.hora)) {
        return NextResponse.json({ error: `El horario ${t.hora} no es valido` }, { status: 400 });
      }
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

    // Todo o nada: si un horario ya esta tomado, no se crea ninguno
    const turnosCreados = await prisma.$transaction(async (tx) => {
      const creados = [];
      for (const t of turnos as TurnoPedido[]) {
        const { iniciaEn, terminaEn } = construirHorario(t.fecha, t.hora);

        const ocupado = await tx.turnos.findFirst({
          where: {
            kinesiologoId,
            estado: { not: "CANCELADO" },
            iniciaEn: { lt: terminaEn },
            terminaEn: { gt: iniciaEn },
          },
        });
        if (ocupado) throw new HorarioOcupadoError();

        creados.push(
          await tx.turnos.create({
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
          })
        );
      }
      return creados;
    });

    let mailEnviado = true;
    try {
      await enviarMailNuevoTurno({
        nombre: paciente.nombre ?? nombre,
        telefono: paciente.telefono ?? telefono,
        obraSocial: paciente.obraSocial,
        motivo,
        primeraVez: Boolean(primeraVez),
        sesiones: Number(sesiones) || 1,
        turnos: turnosCreados,
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
    if (error instanceof HorarioOcupadoError) {
      return NextResponse.json({ error: "Ese horario ya fue tomado, elegi otro" }, { status: 409 });
    }
    console.error("Error creando turno:", error);
    return NextResponse.json({ error: "No se pudo guardar el turno" }, { status: 500 });
  }
}