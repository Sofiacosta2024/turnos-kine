const HORA_FIJA = 9;
const DURACION_MIN = 45;

export function construirHorario(fechaStr: string) {
  const [y, m, d] = fechaStr.split("-").map(Number);
  const iniciaEn = new Date(y, m - 1, d, HORA_FIJA, 0, 0);
  const terminaEn = new Date(iniciaEn.getTime() + DURACION_MIN * 60000);
  return { iniciaEn, terminaEn };
}