import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getHorariosDelDia, construirHorario } from "@/lib/horarios";

export async function GET(req: NextRequest) {
  const fecha = req.nextUrl.searchParams.get("fecha");
  if (!fecha || !/^\d{4}-\d{2}-\d{2}$/.test(fecha)) {
    return NextResponse.json({ error: "Fecha invalida" }, { status: 400 });
  }
  const kinesiologoId = process.env.KINESIOLOGO_ID;
  if (!kinesiologoId) {
    return NextResponse.json({ error: "Falta KINESIOLOGO_ID" }, { status: 500 });
  }

  const horarios = await getHorariosDelDia(fecha);
  const ocupados = await prisma.turnos.findMany({
    where: {
      kinesiologoId,
      estado: { not: "CANCELADO" },
      iniciaEn: {
        gte: new Date(`${fecha}T00:00:00-03:00`),
        lte: new Date(`${fecha}T23:59:59-03:00`),
      },
    },
    select: { iniciaEn: true, terminaEn: true },
  });

  const ahora = new Date();
  const libres = horarios.filter((h) => {
    const { iniciaEn, terminaEn } = construirHorario(fecha, h);
    if (iniciaEn <= ahora) return false;
    return !ocupados.some((o) => o.iniciaEn < terminaEn && o.terminaEn > iniciaEn);
  });

  return NextResponse.json(libres);
}