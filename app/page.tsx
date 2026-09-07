import Image from "next/image";
import Link from "next/link";
import { Fraunces, Work_Sans } from "next/font/google";

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

const services = [
  {
    name: "Kinesiologia deportiva",
    desc: "Prevencion y recuperacion de lesiones para volver a entrenar sin miedo a recaer.",
  },
  {
    name: "Rehabilitacion post-quirurgica",
    desc: "Planes progresivos despues de una cirugia, con seguimiento semana a semana.",
  },
  {
    name: "RPG - Reeducacion postural",
    desc: "Trabajo global de la postura para dolores cronicos de espalda y cervicales.",
  },
  {
    name: "Kinesiologia respiratoria",
    desc: "Tecnicas de higiene bronquial para chicos y adultos.",
  },
];

export default function Home() {
  return (
    <div
      className={`${fraunces.variable} ${workSans.variable} min-h-screen`}
      style={{ backgroundColor: "#F2EEE3", color: "#17272A" }}
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        {/* Nav */}
        <header className="flex items-center justify-between py-8">
          <span
            className="text-lg tracking-tight"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Lic. [Nombre Apellido]
          </span>
          <Link
            href="/turnos"
            className="rounded-full px-5 py-2.5 text-sm font-medium text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: "#C1793B" }}
          >
            Reservar turno
          </Link>
        </header>

        {/* Hero */}
        <section className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-5 sm:gap-8 sm:py-20">
          <div className="flex flex-col justify-center gap-6 sm:col-span-3">
            <h1
              className="text-4xl leading-[1.1] sm:text-5xl"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Recupera tu movimiento,
              <br />
              <span className="italic" style={{ color: "#7E9C87" }}>
                sin dolor.
              </span>
            </h1>
            <p
              className="max-w-md text-base leading-7"
              style={{ fontFamily: "var(--font-work-sans)", color: "#3E4B47" }}
            >
              Atencion kinesica personalizada, con un plan de tratamiento
              pensado para tu cuerpo y tus tiempos, no un protocolo generico.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/turnos"
                className="rounded-full px-6 py-3 text-sm font-medium text-white transition-colors hover:opacity-90"
                style={{ backgroundColor: "#17272A" }}
              >
                Reservar turno
              </Link>
              <a
                href="#servicios"
                className="rounded-full border px-6 py-3 text-sm font-medium transition-colors"
                style={{ borderColor: "#17272A33" }}
              >
                Ver servicios
              </a>
            </div>
          </div>

          <div className="relative sm:col-span-2">
            <div
              className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl"
              style={{ backgroundColor: "#E4DFCF" }}
            >
              {/* Reemplaza /kinesiologo-hero.jpg en /public por tu foto */}
              <Image
                src="/kinesiologo-hero.jpg"
                alt="Kinesiologo atendiendo a un paciente"
                fill
                sizes="(max-width: 640px) 100vw, 400px"
                className="object-cover"
              />
            </div>
            {/* Linea de movimiento, un solo gesto decorativo */}
            <svg
              className="pointer-events-none absolute -bottom-6 -left-10 h-16 w-32 sm:-left-14"
              viewBox="0 0 140 60"
              fill="none"
            >
              <path
                d="M2 40C25 10 45 55 70 25C95 -5 115 45 138 15"
                stroke="#C1793B"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="py-14 sm:py-20">
          <h2
            className="mb-8 text-2xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Como puedo ayudarte
          </h2>
          <div style={{ borderTop: "1px solid #17272A1F" }}>
            {services.map((s) => (
              <div
                key={s.name}
                className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:gap-8"
                style={{ borderBottom: "1px solid #17272A1F" }}
              >
                <span
                  className="text-lg sm:w-72 sm:shrink-0"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {s.name}
                </span>
                <p
                  className="text-sm leading-6"
                  style={{ fontFamily: "var(--font-work-sans)", color: "#3E4B47" }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre mi */}
        <section className="grid grid-cols-1 gap-8 py-14 sm:grid-cols-5 sm:py-20">
          <div className="sm:col-span-2">
            <div
              className="relative aspect-square w-full max-w-[220px] overflow-hidden rounded-2xl"
              style={{ backgroundColor: "#E4DFCF" }}
            >
              <Image
                src="/kinesiologo-foto.jpg"
                alt="Foto del kinesiologo"
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:col-span-3">
            <h2
              className="text-2xl"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Sobre mi
            </h2>
            <p
              className="max-w-md text-sm leading-7"
              style={{ fontFamily: "var(--font-work-sans)", color: "#3E4B47" }}
            >
              Soy Licenciado/a en Kinesiologia (M.P. [numero]), con [X] anos
              de experiencia trabajando en recuperacion deportiva y
              rehabilitacion. Creo en explicarte que le pasa a tu cuerpo, no
              solo en tratarlo.
            </p>
          </div>
        </section>

        {/* Consultas */}
        <section
          className="my-14 rounded-2xl px-8 py-12 text-white sm:my-20 sm:px-12"
          style={{ backgroundColor: "#17272A" }}
        >
          <h2
            className="mb-3 text-2xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Consultas
          </h2>
          <p
            className="mb-8 max-w-md text-sm leading-6"
            style={{ fontFamily: "var(--font-work-sans)", color: "#D8DED9" }}
          >
            Si tenes una duda antes de sacar el turno, escribime por
            WhatsApp y te respondo a la brevedad.
          </p>
          <a
            href="https://wa.me/549XXXXXXXXXX"
            className="inline-block rounded-full px-6 py-3 text-sm font-medium transition-colors hover:opacity-90"
            style={{ backgroundColor: "#C1793B" }}
          >
            Escribir por WhatsApp
          </a>
        </section>

        {/* Footer */}
        <footer
          className="flex flex-col gap-2 py-10 text-sm sm:flex-row sm:items-center sm:justify-between"
          style={{ fontFamily: "var(--font-work-sans)", color: "#3E4B47" }}
        >
          <span>[Direccion del consultorio], [Ciudad]</span>
          <span>contacto@[tudominio].com</span>
        </footer>
      </div>
    </div>
  );
}