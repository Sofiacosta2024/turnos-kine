"use server";
import { prisma } from "@/lib/prisma";
import { construirHorario } from "@/lib/horarios";
import { revalidatePath } from "next/cache";
import { enviarMailPaciente } from "@/lib/mail"; // ajustá la ruta a donde esté tu mail.ts

export async function reagendarTurno(token: string, fecha: string) {
  const turno = await prisma.turnos.findUnique({ where: { tokenCancelacion: token } });
  if (!turno) return { ok: false, error: "No encontramos el turno." };
  if (turno.estado === "CANCELADO") return { ok: false, error: "El turno está cancelado." };
  if (turno.iniciaEn < new Date()) return { ok: false, error: "El turno ya pasó." };

  if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha)) return { ok: false, error: "Fecha inválida." };
  const [y, m, d] = fecha.split("-").map(Number);
  const diaSemana = new Date(y, m - 1, d).getDay();
  if (diaSemana === 0 || diaSemana === 6) return { ok: false, error: "Elegí un día de semana." };

  const { iniciaEn, terminaEn } = construirHorario(fecha);
  if (isNaN(iniciaEn.getTime()) || iniciaEn < new Date()) {
    return { ok: false, error: "Elegí una fecha futura." };
  }

  // Si tu route.ts no valida cupo al reservar, sacá este bloque para ser consistente
  const ocupado = await prisma.turnos.findFirst({
    where: { iniciaEn, estado: { not: "CANCELADO" }, id: { not: turno.id } },
  });
  if (ocupado) return { ok: false, error: "Ese día ya está ocupado, elegí otro." };

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
    // El turno ya se reagendó; si falla el mail no queremos mostrar error
    console.error("No se pudo enviar el mail de reagendado:", err);
  }

  revalidatePath(`/turnos/reagendar/${token}`);
  return { ok: true, error: "" };
}