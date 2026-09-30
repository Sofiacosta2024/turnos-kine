"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function cancelarTurno(token: string) {
  const turno = await prisma.turnos.findUnique({
    where: { tokenCancelacion: token },
  });

  // Si no existe, ya está cancelado o ya pasó, no hacemos nada
  if (!turno || turno.estado === "CANCELADO" || turno.iniciaEn < new Date()) {
    return;
  }

  await prisma.turnos.update({
    where: { id: turno.id },
    data: { estado: "CANCELADO", updatedAt: new Date() },
  });

  revalidatePath(`/turnos/cancelar/${token}`);
}