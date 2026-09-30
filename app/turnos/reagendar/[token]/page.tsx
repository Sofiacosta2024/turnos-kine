import { notFound } from "next/navigation";
import Link from "next/link";
import { Fraunces, Work_Sans } from "next/font/google";
import { prisma } from "@/lib/prisma";
import ReagendarForm from "./ReagendarForm";

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

export default async function ReagendarPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const turno = await prisma.turnos.findUnique({ where: { tokenCancelacion: token } });
  if (!turno) return notFound();

  const fecha = turno.iniciaEn.toLocaleDateString("es-AR", {
    weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: TZ,
  });
  const hora = turno.iniciaEn.toLocaleTimeString("es-AR", {
    hour: "2-digit", minute: "2-digit", timeZone: TZ,
  });

  const cancelado = turno.estado === "CANCELADO";
  const pasado = turno.iniciaEn < new Date();
  const puedeReagendar = !cancelado && !pasado;

  return (
    <div
      className={`${fraunces.variable} ${workSans.variable} min-h-screen`}
      style={{ backgroundColor: "#F2EEE3", color: "#17272A" }}
    >
      <div className="mx-auto max-w-2xl px-6 py-8 sm:px-10 sm:py-14">
        <Link href="/" className="text-sm underline"
          style={{ fontFamily: "var(--font-work-sans)", color: "#3E4B47" }}>
          Volver al inicio
        </Link>

        <h1 className="mt-6 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-fraunces)" }}>
          Reagendar turno
        </h1>

        <div className="mt-8 rounded-2xl bg-white p-6"
          style={{ border: "1px solid #17272A26", fontFamily: "var(--font-work-sans)" }}>
          <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "#3E4B47" }}>
            Turno actual
          </p>
          <p className="mt-1 text-sm">{fecha} - {hora} hs</p>
        </div>

        {puedeReagendar ? (
          <ReagendarForm token={token} />
        ) : (
          <p className="mt-6 text-sm" style={{ fontFamily: "var(--font-work-sans)", color: "#3E4B47" }}>
            {cancelado
              ? "Este turno está cancelado, no se puede reagendar."
              : "Este turno ya pasó, no se puede reagendar."}
          </p>
        )}
      </div>
    </div>
  );
}