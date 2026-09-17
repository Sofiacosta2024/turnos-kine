// lib/ics.ts
type EventoICS = {
  uid: string;
  titulo: string;
  descripcion: string;
  inicio: Date;
  fin: Date;
};

export function generarICS(eventos: EventoICS[]) {
  const formatICSDate = (date: Date) =>
    date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  const vevents = eventos.map((e) => [
    "BEGIN:VEVENT",
    `UID:${e.uid}@turnos-kinesiologia`,
    `DTSTAMP:${formatICSDate(new Date())}`,
    `DTSTART:${formatICSDate(e.inicio)}`,
    `DTEND:${formatICSDate(e.fin)}`,
    `SUMMARY:${e.titulo}`,
    `DESCRIPTION:${e.descripcion}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
  ].join("\r\n"));

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Kinesiologia//Turnos//ES",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    ...vevents,
    "END:VCALENDAR",
  ].join("\r\n");
}

export function generarLinkGoogleCalendar(
  titulo: string,
  descripcion: string,
  inicio: Date,
  fin: Date
) {
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: titulo,
    dates: `${fmt(inicio)}/${fmt(fin)}`,
    details: descripcion,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}