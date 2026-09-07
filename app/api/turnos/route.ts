import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { enviarMailNuevoTurno } from "@/lib/mail";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      nombre,
      telefono,
      obraSocial,
      motivo,
      primeraVez,
      sesiones,
      fechas,
      antecedentes,
      comentario,
    } = body ?? {};

    // Validaciones minimas
    if (!nombre || typeof nombre !== "string" || !nombre.trim()) {
      return NextResponse.json({ error: "Falta el nombre" }, { status: 400 });
    }
    if (!telefono || typeof telefono !== "string" || !telefono.trim()) {
      return NextResponse.json({ error: "Falta el telefono" }, { status: 400 });
    }
    if (!motivo || typeof motivo !== "string") {
      return NextResponse.json({ error: "Falta el motivo" }, { status: 400 });
    }
    if (!Array.isArray(fechas) || fechas.length === 0) {
      return NextResponse.json(
        { error: "Debe seleccionar al menos un dia" },
        { status: 400 }
      );
    }

    const turno = await prisma.turno.create({
      data: {
        nombre: nombre.trim(),
        telefono: telefono.trim(),
        obraSocial: obraSocial?.trim() || null,
        motivo,
        antecedentes: antecedentes?.trim() || null,
        comentario: comentario?.trim() || null,
        primeraVez: Boolean(primeraVez),
        sesiones: Number(sesiones) || 1,
        fechas, // array de strings "YYYY-MM-DD", guardado como JSON
      },
    });

    // Si el mail falla, no perdemos el turno (ya quedo guardado en la BD),
    // pero avisamos en la respuesta para poder loguearlo o reintentar despues.
    let mailEnviado = true;
    try {
      await enviarMailNuevoTurno({
        nombre: turno.nombre,
        telefono: turno.telefono,
        obraSocial: turno.obraSocial,
        motivo: turno.motivo,
        primeraVez: turno.primeraVez,
        sesiones: turno.sesiones,
        fechas: fechas as string[],
        antecedentes: turno.antecedentes,
        comentario: turno.comentario,
      });
    } catch (mailError) {
      console.error("Error enviando mail de turno:", mailError);
      mailEnviado = false;
    }

    return NextResponse.json({ ok: true, id: turno.id, mailEnviado });
  } catch (error) {
    console.error("Error creando turno:", error);
    return NextResponse.json(
      { error: "No se pudo guardar el turno" },
      { status: 500 }
    );
  }
}