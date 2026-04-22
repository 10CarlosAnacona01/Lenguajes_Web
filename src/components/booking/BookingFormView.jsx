import React from "react";
import {
  MONTHS,
  BASE_SLOTS,
  SERVICES_LIST,
  ARTISTS,
} from "../../data/booking.js";

export default function BookingFormView({
  selectedDate,
  selectedSlot,
  bookedSlots,
  form,
  loading,
  onBack,
  onSlotSelect,
  onFormChange,
  onConfirm,
}) {
  const slots = BASE_SLOTS.map((t) => ({
    time: t,
    booked: (bookedSlots[selectedDate.key] || []).includes(t),
  }));

  // Método de JS para eliminar espacio de los extremos (al principio y final, no centro)
  const isValid =
    form.name.trim() && form.phone.trim() && form.service && selectedSlot;

  return (
    <>
      <div className="booking-step">PASO 2 / 2 · Horario y datos</div>
      <div className="progress-bar">
        <div className="progress-step done"></div>
        <div className="progress-step active"></div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <span style={{ color: "rgba(255,255,255,.75)", fontSize: ".88rem" }}>
          {selectedDate.day} de {MONTHS[selectedDate.month]} {selectedDate.year}
        </span>
        <button
          onClick={onBack}
          style={{
            background: "rgba(255,255,255,.08)",
            border: "none",
            color: "rgba(255,255,255,.6)",
            borderRadius: 8,
            padding: "5px 12px",
            cursor: "pointer",
            fontSize: ".78rem",
          }}
        >
          ← Cambiar
        </button>
      </div>

      <div className="time-slots">
        <div className="time-slots-title"> Elige tu horario</div>
        <div className="slots-grid">
          {slots.map((s) => {
            const cls = `
              slot
              ${s.booked ? "slot-booked" : ""}
              ${selectedSlot === s.time ? "slot-selected" : ""}
            `;
            return (
              <div
                key={s.time}
                className={cls}
                onClick={() => !s.booked && onSlotSelect(s.time)}
              >
                {s.time}
              </div>
            );
          })}
        </div>
      </div>

      <div className="booking-form">
        <div className="form-row">
          <input
            className="form-input"
            placeholder="Tu nombre"
            value={form.name || ""} // Siempre tenga un valor valido, un string (si tiene algo lo usa, sino una cadena vacía para evitar errores en React al usar un valor undefined o null)
            onChange={(e) => onFormChange("name", e.target.value)}
          />
          <input
            className="form-input"
            placeholder="WhatsApp"
            value={form.phone ?? ""} // Operador de coalescencia nula (??) cuando sea null o undefined, asegurando que el valor sea siempre una cadena (en este caso vacia)
            onChange={(e) => onFormChange("phone", e.target.value)}
          />
        </div>

        <select
          className="form-select"
          value={form.service}
          onChange={(e) => onFormChange("service", e.target.value)}
        >
          <option value="">¿Qué servicio deseas?</option>
          {SERVICES_LIST.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <select
          className="form-select"
          value={form.artist}
          onChange={(e) => onFormChange("artist", e.target.value)}
        >
          <option value="">Especialista (opcional)</option>
          {ARTISTS.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>

        <button
          className="btn-book"
          onClick={onConfirm}
          disabled={!isValid || loading}
        >
          {loading ? "Confirmando tu cita..." : "Confirmar Reserva"}
        </button>
      </div>
    </>
  );
}
