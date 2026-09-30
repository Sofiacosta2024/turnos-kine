// lib/horarios.ts
const HORARIOS_FIJOS = ["08:00", "10:00", "15:00", "17:00"];
const DURACION_MIN = 45;

// hoy: fijos. Después: leer de la base lo que cargue el kinesiólogo
export async function getHorariosDelDia(_dia: string): Promise<string[]> {
  return HORARIOS_FIJOS;
}

export function construirHorario(fechaStr: string, hora: string) {
  // Argentina es UTC-3 todo el año, así no depende de la zona horaria del servidor
  const iniciaEn = new Date(`${fechaStr}T${hora}:00-03:00`);
  const terminaEn = new Date(iniciaEn.getTime() + DURACION_MIN * 60000);
  return { iniciaEn, terminaEn };
}