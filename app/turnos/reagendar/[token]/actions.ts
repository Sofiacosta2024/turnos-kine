"use server";
import { prisma } from "@/lib/prisma";
import { construirHorario, getHorariosDelDia } from "@/lib/horarios";
import { revalidatePath } from "next/cache";
import { enviarMailPaciente } from "@/lib/mail";

export async function reagendarTurno(token: string, fecha: string, hora: string) {
  const turno = await prisma.turnos.findUnique({ where: { tokenCancelacion: token } });
  if (!turno) return { ok: false, error: "No encontramos el turno." };
  if (turno.estado === "CANCELADO") return { ok: false, error: "El turno está cancelado." };
  if (turno.iniciaEn < new Date()) return { ok: false, error: "El turno ya pasó." };

  if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha)) return { ok: false, error: "Fecha inválida." };
  if (!hora) return { ok: false, error: "Elegí un horario." };

  const [y, m, d] = fecha.split("-").map(Number);
  const diaSemana = new Date(y, m - 1, d).getDay();
  if (diaSemana === 0 || diaSemana === 6) return { ok: false, error: "Elegí un día de semana." };

  const validos = await getHorariosDelDia(fecha);
  if (!validos.includes(hora)) return { ok: false, error: "Horario inválido." };

  const { iniciaEn, terminaEn } = construirHorario(fecha, hora);
  if (isNaN(iniciaEn.getTime()) || iniciaEn < new Date()) {
    return { ok: false, error: "Elegí una fecha futura." };
  }

  // Mismo criterio que el POST: choque por solapamiento, ignorando este mismo turno
  const ocupado = await prisma.turnos.findFirst({
    where: {
      kinesiologoId: turno.kinesiologoId,
      estado: { not: "CANCELADO" },
      id: { not: turno.id },
      iniciaEn: { lt: terminaEn },
      terminaEn: { gt: iniciaEn },
    },
  });
  if (ocupado) return { ok: false, error: "Ese horario ya está ocupado, elegí otro." };

  const actualizado = await prisma.turnos.update({
    where: { id: turno.id },
    data: { iniciaEn, terminaEn, estado: "PENDIENTE", updatedAt: new Date() },
  });

  // Mail al paciente con la fecha nueva
  try {
    const paciente = await prisma.pacientes.findUnique({
      where: { id: actualizado.pacienteId },
    });
    if (paciente?.email) {
      await enviarMailPaciente(
        { email: paciente.email, nombre: paciente.nombre ?? "" },
        [actualizado]
      );
    }
  } catch (err) {
    console.error("No se pudo enviar el mail de reagendado:", err);
  }

  revalidatePath(`/turnos/reagendar/${token}`);
  return { ok: true, error: "" };
}