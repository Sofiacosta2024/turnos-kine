import nodemailer from "nodemailer";

const KINESIOLOGO_EMAIL = "buyerzapasya@gmail.com";

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