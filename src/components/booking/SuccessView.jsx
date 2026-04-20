import React from "react";

export default function SuccessView({ confirmation, onReset }) {
  return (
    <div className="booking-success">
      <div className="success-icon">🎉</div>
      <div className="success-title">
        ¡Cita confirmada,
        <br />
        {confirmation.name}!
      </div>
      <div className="success-detail">
        Te esperamos y recibirás un mensaje de confirmación a tu WhatsApp en
        breve.
      </div>
      <div>
        <span className="success-tag"> {confirmation.date}</span>
        <span className="success-tag"> {confirmation.time}</span>
        <span className="success-tag"> {confirmation.service}</span>
        <span className="success-tag"> {confirmation.artist}</span>
      </div>
      <button className="btn-new" onClick={onReset}>
        + Hacer otra reserva
      </button>
    </div>
  );
}
