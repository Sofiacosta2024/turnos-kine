import nodemailer from "nodemailer";
import { generarICS } from "@/lib/ics";
import { generarLinkGoogleCalendar } from "@/lib/ics";

const KINESIOLOGO_EMAIL = process.env.SMTP_USER;
if (!KINESIOLOGO_EMAIL) {
  throw new Error("Falta configurar SMTP_USER");
}
function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true", // true para puerto 465, false para 587/25
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export type TurnoParaMail = {
  nombre: string;
  telefono: string;
  obraSocial?: string | null;
  motivo: string;
  primeraVez: boolean;
  sesiones: number;
  fechas: string[];
  antecedentes?: string | null;
  comentario?: string | null;
};

function formatoLargo(key: string) {
  const [y, m, d] = key.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export async function enviarMailNuevoTurno(turno: TurnoParaMail) {
  const transporter = getTransporter();

  const filas: [string, string][] = [
    ["Nombre", turno.nombre],
    ["Telefono", turno.telefono],
    ["Obra social", turno.obraSocial || "-"],
    ["Motivo", turno.motivo],
    ["Primera vez", turno.primeraVez ? "Si" : "No"],
    ...(!turno.primeraVez
      ? ([["Cantidad de sesiones", String(turno.sesiones)]] as [string, string][])
      : []),
    ["Dias elegidos", turno.fechas.map(formatoLargo).join(", ")],
    ["Antecedentes", turno.antecedentes || "-"],
    ["Comentario", turno.comentario || "-"],
  ];

  const filasHtml = filas
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;">${label}</td><td style="padding:6px 12px;">${value}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family: sans-serif; color:#17272A;">
      <h2>Nuevo turno solicitado</h2>
      <table style="border-collapse:collapse;">${filasHtml}</table>
    </div>
  `;

  const texto = filas.map(([label, value]) => `${label}: ${value}`).join("\n");

  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: KINESIOLOGO_EMAIL,
    subject: `Nuevo turno: ${turno.nombre}`,
    text: texto,
    html,
  });
}



export async function enviarMailPaciente(
  paciente: { email: string; nombre: string },
  turnos: { id: string; iniciaEn: Date; terminaEn: Date }[]
) {
  const eventos = turnos.map((t) => ({
    uid: t.id,
    titulo: "Turno de kinesiología",
    descripcion: "Turno confirmado en el consultorio",
    inicio: t.iniciaEn,
    fin: t.terminaEn,
  }));

  const icsContent = generarICS(eventos);

  const linksHtml = turnos
    .map((t) => {
      const link = generarLinkGoogleCalendar(
        "Turno de kinesiología",
        "Turno confirmado",
        t.iniciaEn,
        t.terminaEn
      );
      const fecha = t.iniciaEn.toLocaleString("es-AR", { dateStyle: "full", timeStyle: "short" });
      return `
        <div style="margin:16px 0;padding:12px;border:1px solid #e0e0e0;border-radius:8px;">
          <p style="margin:0 0 10px 0;font-weight:600;">${fecha}</p>
          <a href="${link}" target="_blank"
            style="display:inline-block;background-color:#4285F4;color:#ffffff;
                    text-decoration:none;padding:10px 20px;border-radius:6px;
                    font-family:sans-serif;font-size:14px;font-weight:600;">
            Agregar al calendario de Google
          </a>
        </div>
      `;
    })
    .join("");

  await getTransporter().sendMail({
    from: process.env.EMAIL_FROM,
    to: paciente.email,
    subject: turnos.length > 1 ? "Confirmación de tus turnos" : "Confirmación de tu turno",
    html: `
      <p>Hola ${paciente.nombre}, tu${turnos.length > 1 ? "s turnos quedaron" : " turno quedó"} confirmado${turnos.length > 1 ? "s" : ""}.</p>
      <p style="margin:16px 0 4px 0;">Si usa el calendario de Google, para agregar un recordatorio presione el botón:</p>
      ${linksHtml}
      <p style="margin:16px 0 0 0;color:#555;font-size:13px;">
        Si usa otro tipo de calendario, para agregar un recordatorio descargue el archivo adjunto.
      </p>
    `,
    attachments: [{ filename: "turnos.ics", content: icsContent, contentType: "text/calendar" }],
  });
}