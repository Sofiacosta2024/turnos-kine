"use client";

import { useMemo, useState } from "react";
import { reagendarTurno } from "./actions";

const diasSemana = ["L", "M", "M", "J", "V", "S", "D"];
const FECHAS_SIN_CUPO = new Set<string>([]); // igual que en tu página de reservas

function toKey(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function generarMes(year: number, month: number) {
  const offset = (new Date(year, month, 1).getDay() + 6) % 7;
  const diasEnMes = new Date(year, month + 1, 0).getDate();
  const celdas: (Date | null)[] = [];
  for (let i = 0; i < offset; i++) celdas.push(null);
  for (let d = 1; d <= diasEnMes; d++) celdas.push(new Date(year, month, d));
  return celdas;
}

function formatoLargo(key: string) {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("es-AR", {
    weekday: "long", day: "numeric", month: "long",
  });
}

export default function ReagendarForm({ token }: { token: string }) {
  const hoy = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [monthOffset, setMonthOffset] = useState(0);
  const [seleccionada, setSeleccionada] = useState<string | null>(null);
  const [estado, setEstado] = useState<"idle" | "enviando" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const base = useMemo(
    () => new Date(hoy.getFullYear(), hoy.getMonth() + monthOffset, 1),
    [hoy, monthOffset]
  );
  const celdas = useMemo(() => generarMes(base.getFullYear(), base.getMonth()), [base]);
  const nombreMes = base.toLocaleDateString("es-AR", { month: "long", year: "numeric" });

  function estaDisponible(date: Date) {
    if (date <= hoy) return false; // desde mañana
    const dia = date.getDay();
    if (dia === 0 || dia === 6) return false;
    return !FECHAS_SIN_CUPO.has(toKey(date));
  }

  async function confirmar() {
    if (!seleccionada) return;
    setEstado("enviando");
    setErrorMsg("");
    const res = await reagendarTurno(token, seleccionada);
    if (res.ok) setEstado("ok");
    else {
      setEstado("error");
      setErrorMsg(res.error);
    }
  }

  if (estado === "ok") {
    return (
      <p className="mt-6 text-sm" style={{ fontFamily: "var(--font-work-sans)", color: "#3E4B47" }}>
        Listo! Tu turno se reagendó para el {seleccionada && formatoLargo(seleccionada)}.
        Nos vamos a poner en contacto para confirmarlo.
      </p>
    );
  }

  return (
    <div className="mt-8" style={{ fontFamily: "var(--font-work-sans)" }}>
      <p className="mb-3 text-sm font-medium">Elegí el nuevo día</p>

      <div className="mb-3 flex items-center justify-between">
        <button type="button" onClick={() => setMonthOffset((m) => Math.max(m - 1, 0))}
          disabled={monthOffset === 0}
          className="rounded-full px-3 py-1.5 text-sm disabled:opacity-30"
          style={{ border: "1px solid #17272A26" }} aria-label="Mes anterior">
          &lt;
        </button>
        <span className="text-base capitalize" style={{ fontFamily: "var(--font-fraunces)" }}>
          {nombreMes}
        </span>
        <button type="button" onClick={() => setMonthOffset((m) => Math.min(m + 1, 5))}
          disabled={monthOffset === 5}
          className="rounded-full px-3 py-1.5 text-sm disabled:opacity-30"
          style={{ border: "1px solid #17272A26" }} aria-label="Mes siguiente">
          &gt;
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1.5 text-center">
        {diasSemana.map((d, i) => (
          <span key={`${d}-${i}`} className="py-1 text-xs font-medium" style={{ color: "#3E4B47" }}>
            {d}
          </span>
        ))}
        {celdas.map((date, i) => {
          if (!date) return <span key={`empty-${i}`} />;
          const key = toKey(date);
          const disponible = estaDisponible(date);
          const sel = seleccionada === key;
          return (
            <button key={key} type="button" disabled={!disponible}
              onClick={() => setSeleccionada(sel ? null : key)}
              className="aspect-square rounded-lg text-sm transition-colors disabled:cursor-not-allowed"
              style={{
                backgroundColor: sel ? "#C1793B" : disponible ? "#ffffff" : "transparent",
                color: sel ? "#ffffff" : disponible ? "#17272A" : "#17272A55",
                border: disponible ? "1px solid #17272A26" : "none",
              }}>
              {date.getDate()}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-sm">
        {seleccionada ? `Nuevo turno: ${formatoLargo(seleccionada)}.` : "Todavía no elegiste ningún día."}
      </p>

      <button type="button" onClick={confirmar}
        disabled={!seleccionada || estado === "enviando"}
        className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white transition-colors"
        style={{
          backgroundColor: seleccionada && estado !== "enviando" ? "#C1793B" : "#C1793B66",
          cursor: seleccionada && estado !== "enviando" ? "pointer" : "not-allowed",
        }}>
        {estado === "enviando" ? "Reagendando..." : "Confirmar nueva fecha"}
      </button>

      {estado === "error" && (
        <p className="mt-3 text-sm" style={{ color: "#B3261E" }}>{errorMsg}</p>
      )}
    </div>
  );
}