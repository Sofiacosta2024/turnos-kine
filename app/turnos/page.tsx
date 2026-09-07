"use client";

import { useMemo, useState } from "react";
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

const motivos = [
  "Kinesiologia deportiva",
  "Rehabilitacion post-quirurgica",
  "RPG - Reeducacion postural",
  "Kinesiologia respiratoria",
  "Otro",
];

const diasSemana = ["L", "M", "M", "J", "V", "S", "D"];

// Fechas puntuales sin cupo, ademas de fines de semana. Cambia estas fechas
// (formato "YYYY-MM-DD") por las que correspondan a tu agenda real, o
// reemplaza esta logica por una consulta a tu sistema de turnos.
const FECHAS_SIN_CUPO = new Set<string>([]);

function toKey(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(d.getDate()).padStart(2, "0")}`;
}

function formatoLargo(key: string) {
  const [y, m, d] = key.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

function generarMes(year: number, month: number) {
  const primerDia = new Date(year, month, 1);
  // getDay(): 0=domingo ... 6=sabado. Convertimos para que la semana arranque el lunes.
  const offset = (primerDia.getDay() + 6) % 7;
  const diasEnMes = new Date(year, month + 1, 0).getDate();

  const celdas: (Date | null)[] = [];
  for (let i = 0; i < offset; i++) celdas.push(null);
  for (let d = 1; d <= diasEnMes; d++) celdas.push(new Date(year, month, d));
  return celdas;
}

type EstadoEnvio = "idle" | "enviando" | "ok" | "error";

export default function Turnos() {
  const hoy = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [monthOffset, setMonthOffset] = useState(0);
  const [primeraVez, setPrimeraVez] = useState(true);
  const [sesiones, setSesiones] = useState(3);
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [obraSocial, setObraSocial] = useState("");
  const [motivo, setMotivo] = useState(motivos[0]);
  const [antecedentes, setAntecedentes] = useState("");
  const [comentario, setComentario] = useState("");

  const [estadoEnvio, setEstadoEnvio] = useState<EstadoEnvio>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const maxSelectable = primeraVez ? 1 : sesiones;

  const base = new Date(hoy.getFullYear(), hoy.getMonth() + monthOffset, 1);
  const year = base.getFullYear();
  const month = base.getMonth();
  const celdas = useMemo(() => generarMes(year, month), [year, month]);

  const nombreMes = base.toLocaleDateString("es-AR", {
    month: "long",
    year: "numeric",
  });

  function estaDisponible(date: Date) {
    if (date < hoy) return false;
    const diaSemana = date.getDay();
    if (diaSemana === 0 || diaSemana === 6) return false;
    if (FECHAS_SIN_CUPO.has(toKey(date))) return false;
    return true;
  }

  function toggleFecha(date: Date) {
    if (!estaDisponible(date)) return;
    const key = toKey(date);

    if (maxSelectable === 1) {
      setSelectedDates((prev) => (prev[0] === key ? [] : [key]));
      return;
    }

    setSelectedDates((prev) => {
      if (prev.includes(key)) return prev.filter((k) => k !== key);
      if (prev.length >= maxSelectable) return prev;
      return [...prev, key].sort();
    });
  }

  function handlePrimeraVez(valor: boolean) {
    setPrimeraVez(valor);
    setSelectedDates([]);
  }

  function handleSesiones(n: number) {
    setSesiones(n);
    setSelectedDates((prev) => prev.slice(0, n));
  }

  const faltanDias = Math.max(maxSelectable - selectedDates.length, 0);

  const puedeEnviar =
    nombre.trim() !== "" &&
    telefono.trim() !== "" &&
    selectedDates.length === maxSelectable &&
    estadoEnvio !== "enviando";

  async function handleEnviar() {
    if (!puedeEnviar) return;
    setEstadoEnvio("enviando");
    setErrorMsg("");

    try {
      const res = await fetch("/api/turnos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          telefono,
          obraSocial,
          motivo,
          primeraVez,
          sesiones,
          fechas: selectedDates,
          antecedentes,
          comentario,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "No se pudo enviar el turno");
      }

      setEstadoEnvio("ok");
      // Limpiamos el formulario despues de un envio exitoso
      setNombre("");
      setTelefono("");
      setObraSocial("");
      setAntecedentes("");
      setComentario("");
      setSelectedDates([]);
    } catch (err) {
      setEstadoEnvio("error");
      setErrorMsg(
        err instanceof Error ? err.message : "No se pudo enviar el turno"
      );
    }
  }

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
          Reserva tu turno
        </h1>
        <p
          className="mt-3 max-w-md text-sm leading-6"
          style={{ fontFamily: "var(--font-work-sans)", color: "#3E4B47" }}
        >
          Elegi los dias disponibles en el calendario y completa tus datos.
          Al enviar, tu turno queda registrado y le llega un aviso al
          kinesiologo por mail.
        </p>

        {/* Primera vez / sesiones */}
        <div
          className="mt-8 flex flex-col gap-5"
          style={{ fontFamily: "var(--font-work-sans)" }}
        >
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium">Es tu primera vez?</span>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => handlePrimeraVez(true)}
                className="rounded-full px-5 py-2 text-sm font-medium transition-colors"
                style={{
                  backgroundColor: primeraVez ? "#17272A" : "#ffffff",
                  color: primeraVez ? "#F2EEE3" : "#17272A",
                  border: "1px solid #17272A26",
                }}
              >
                Si, primera vez
              </button>
              <button
                type="button"
                onClick={() => handlePrimeraVez(false)}
                className="rounded-full px-5 py-2 text-sm font-medium transition-colors"
                style={{
                  backgroundColor: !primeraVez ? "#17272A" : "#ffffff",
                  color: !primeraVez ? "#F2EEE3" : "#17272A",
                  border: "1px solid #17272A26",
                }}
              >
                No, ya soy paciente
              </button>
            </div>
            <span className="text-xs" style={{ color: "#3E4B47" }}>
              {primeraVez
                ? "Para la primera consulta se selecciona un solo dia."
                : "Elegi cuantas sesiones necesitas y seleccioná esa cantidad de dias."}
            </span>
          </div>

          {!primeraVez && (
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium">
                Cuantas sesiones necesitas?
              </span>
              <select
                value={sesiones}
                onChange={(e) => handleSesiones(Number(e.target.value))}
                className="w-32 rounded-lg border bg-white px-4 py-2.5 text-sm outline-none focus:ring-2"
                style={{ borderColor: "#17272A26" }}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "sesion" : "sesiones"}
                  </option>
                ))}
              </select>
            </label>
          )}
        </div>

        {/* Calendario */}
        <div className="mt-8">
          <div className="mb-3 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMonthOffset((m) => Math.max(m - 1, 0))}
              disabled={monthOffset === 0}
              className="rounded-full px-3 py-1.5 text-sm disabled:opacity-30"
              style={{ border: "1px solid #17272A26" }}
              aria-label="Mes anterior"
            >
              &lt;
            </button>
            <span
              className="text-base capitalize"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              {nombreMes}
            </span>
            <button
              type="button"
              onClick={() => setMonthOffset((m) => Math.min(m + 1, 5))}
              disabled={monthOffset === 5}
              className="rounded-full px-3 py-1.5 text-sm disabled:opacity-30"
              style={{ border: "1px solid #17272A26" }}
              aria-label="Mes siguiente"
            >
              &gt;
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1.5 text-center">
            {diasSemana.map((d, i) => (
              <span
                key={`${d}-${i}`}
                className="py-1 text-xs font-medium"
                style={{
                  fontFamily: "var(--font-work-sans)",
                  color: "#3E4B47",
                }}
              >
                {d}
              </span>
            ))}

            {celdas.map((date, i) => {
              if (!date) return <span key={`empty-${i}`} />;
              const key = toKey(date);
              const disponible = estaDisponible(date);
              const seleccionado = selectedDates.includes(key);

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => toggleFecha(date)}
                  disabled={!disponible}
                  className="aspect-square rounded-lg text-sm transition-colors disabled:cursor-not-allowed"
                  style={{
                    fontFamily: "var(--font-work-sans)",
                    backgroundColor: seleccionado
                      ? "#C1793B"
                      : disponible
                      ? "#ffffff"
                      : "transparent",
                    color: seleccionado
                      ? "#ffffff"
                      : disponible
                      ? "#17272A"
                      : "#17272A55",
                    border: disponible ? "1px solid #17272A26" : "none",
                  }}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>

          <div
            className="mt-4 flex flex-wrap gap-4 text-xs"
            style={{ fontFamily: "var(--font-work-sans)", color: "#3E4B47" }}
          >
            <span className="flex items-center gap-1.5">
              <span
                className="inline-block h-3 w-3 rounded"
                style={{ backgroundColor: "#ffffff", border: "1px solid #17272A26" }}
              />
              Disponible
            </span>
            <span className="flex items-center gap-1.5">
              <span
                className="inline-block h-3 w-3 rounded"
                style={{ backgroundColor: "#C1793B" }}
              />
              Seleccionado
            </span>
            <span className="flex items-center gap-1.5">
              <span
                className="inline-block h-3 w-3 rounded"
                style={{ backgroundColor: "#17272A18" }}
              />
              Sin cupo
            </span>
          </div>

          <p
            className="mt-4 text-sm"
            style={{ fontFamily: "var(--font-work-sans)" }}
          >
            {selectedDates.length === 0
              ? `Seleccionaste 0 de ${maxSelectable} dia${
                  maxSelectable > 1 ? "s" : ""
                }.`
              : faltanDias > 0
              ? `Seleccionaste ${selectedDates.length} de ${maxSelectable}. Falta${
                  faltanDias > 1 ? "n" : ""
                } elegir ${faltanDias} dia${faltanDias > 1 ? "s" : ""} mas.`
              : `Listo, seleccionaste tus ${maxSelectable} dia${
                  maxSelectable > 1 ? "s" : ""
                }.`}
          </p>
        </div>

        {/* Datos de contacto */}
        <form
          className="mt-10 flex flex-col gap-5"
          style={{ fontFamily: "var(--font-work-sans)" }}
          onSubmit={(e) => {
            e.preventDefault();
            handleEnviar();
          }}
        >
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">Nombre y apellido</span>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej: Maria Gomez"
              className="rounded-lg border bg-white px-4 py-2.5 text-sm outline-none focus:ring-2"
              style={{ borderColor: "#17272A26" }}
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">Telefono</span>
            <input
              type="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="Ej: 291 4XXXXXX"
              className="rounded-lg border bg-white px-4 py-2.5 text-sm outline-none focus:ring-2"
              style={{ borderColor: "#17272A26" }}
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">
              Obra social (opcional)
            </span>
            <input
              type="text"
              value={obraSocial}
              onChange={(e) => setObraSocial(e.target.value)}
              placeholder="Ej: OSDE, IOMA, Particular"
              className="rounded-lg border bg-white px-4 py-2.5 text-sm outline-none focus:ring-2"
              style={{ borderColor: "#17272A26" }}
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">Motivo de consulta</span>
            <select
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
              className="rounded-lg border bg-white px-4 py-2.5 text-sm outline-none focus:ring-2"
              style={{ borderColor: "#17272A26" }}
            >
              {motivos.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">
              Antecedentes (opcional)
            </span>
            <textarea
              value={antecedentes}
              onChange={(e) => setAntecedentes(e.target.value)}
              rows={3}
              placeholder="Cirugias previas, lesiones, condiciones medicas relevantes"
              className="resize-none rounded-lg border bg-white px-4 py-2.5 text-sm outline-none focus:ring-2"
              style={{ borderColor: "#17272A26" }}
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">Comentario (opcional)</span>
            <textarea
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              rows={3}
              placeholder="Contame brevemente que te pasa"
              className="resize-none rounded-lg border bg-white px-4 py-2.5 text-sm outline-none focus:ring-2"
              style={{ borderColor: "#17272A26" }}
            />
          </label>

          <button
            type="submit"
            disabled={!puedeEnviar}
            className="mt-2 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white transition-colors"
            style={{
              backgroundColor: puedeEnviar ? "#C1793B" : "#C1793B66",
              cursor: puedeEnviar ? "pointer" : "not-allowed",
            }}
          >
            {estadoEnvio === "enviando" ? "Enviando..." : "Reservar turno"}
          </button>

          {estadoEnvio !== "enviando" &&
            selectedDates.length !== maxSelectable && (
              <span className="text-xs" style={{ color: "#3E4B47" }}>
                Completa nombre, telefono y selecciona{" "}
                {maxSelectable > 1 ? "todos los dias" : "un dia"} para poder
                enviar.
              </span>
            )}

          {estadoEnvio === "ok" && (
            <span className="text-sm" style={{ color: "#3E4B47" }}>
              Listo! Tu turno quedo registrado. Nos vamos a poner en
              contacto para confirmarlo.
            </span>
          )}

          {estadoEnvio === "error" && (
            <span className="text-sm" style={{ color: "#B3261E" }}>
              {errorMsg}. Proba de nuevo en unos minutos.
            </span>
          )}
        </form>
      </div>
    </div>
  );
}