import { notFound } from "next/navigation";
import Link from "next/link";
import { Fraunces, Work_Sans } from "next/font/google";
import { prisma } from "@/lib/prisma";
import { cancelarTurno } from "./actions";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
});

const TZ = "America/Argentina/Buenos_Aires";

export default async function CancelarTurnoPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  const turno = await prisma.turnos.findUnique({
    where: { tokenCancelacion: token },
  });
  if (!turno) return notFound();

  const fecha = turno.iniciaEn.toLocaleDateString("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: TZ,
  });
  const hora = turno.iniciaEn.toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: TZ,
  });

  const cancelado = turno.estado === "CANCELADO";
  const pasado = turno.iniciaEn < new Date();
  const puedeCancelar = !cancelado && !pasado;

  const filas: [string, string][] = [
    ["Fecha", fecha],
    ["Hora", `${hora} hs`],
    ["Motivo", turno.motivo ?? "-"],
    ["Estado", cancelado ? "Cancelado" : turno.estado === "CONFIRMADO" ? "Confirmado" : "Pendiente"],
  ];

  return (
    <div
      className={`${fraunces.variable} ${workSans.variable} min-h-screen`}
      style={{ backgroundColor: "#F2EEE3", color: "#17272A" }}
    >
      <div className="mx-auto max-w-2xl px-6 py-8 sm:px-10 sm:py-14">
        <Link
          href="/"
          className="text-sm underline"
          style={{ fontFamily: "var(--font-work-sans)", color: "#3E4B47" }}
        >
          Volver al inicio
        </Link>

        <h1
          className="mt-6 text-3xl sm:text-4xl"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          {cancelado ? "Turno cancelado" : "Cancelar turno"}
        </h1>
        <p
          className="mt-3 max-w-md text-sm leading-6"
          style={{ fontFamily: "var(--font-work-sans)", color: "#3E4B47" }}
        >
          {cancelado
            ? "Este turno ya fue cancelado. Si querés, podés reservar uno nuevo."
            : pasado
            ? "Este turno ya pasó, por lo que no se puede cancelar."
            : "Revisá los datos y confirmá si querés cancelar tu turno."}
        </p>

        {/* Recuadro con la info del turno */}
        <div
          className="mt-8 rounded-2xl bg-white p-6"
          style={{ border: "1px solid #17272A26", fontFamily: "var(--font-work-sans)" }}
        >
          <dl className="flex flex-col gap-4">
            {filas.map(([label, value]) => (
              <div key={label} className="flex flex-col gap-0.5">
                <dt className="text-xs font-medium uppercase tracking-wide" style={{ color: "#3E4B47" }}>
                  {label}
                </dt>
                <dd className="text-sm capitalize-first">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {puedeCancelar ? (
          <form action={cancelarTurno.bind(null, token)} className="mt-8">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "#B3261E", fontFamily: "var(--font-work-sans)" }}
            >
              Confirmar cancelación
            </button>
          </form>
        ) : (
          <Link
            href="/turnos"
            className="mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white"
            style={{ backgroundColor: "#C1793B", fontFamily: "var(--font-work-sans)" }}
          >
            Reservar un turno nuevo
          </Link>
        )}
      </div>
    </div>
  );
}