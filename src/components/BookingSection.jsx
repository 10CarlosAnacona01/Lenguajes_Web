import React from "react";
import BookingApp from "./booking/BookingApp.jsx";

export default function BookingSection() {
  return (
    <section id="reservas" className="uk-section lum-section-booking">
      <div className="uk-container">
        <div className="lum-section-header uk-text-center">
          <div className="lum-section-tag">📅 Reservas</div>
          <h2 className="lum-section-title">
            Agenda tu <em>cita</em>
          </h2>
          <p className="lum-section-sub">
            Elige tu fecha y horario favorito en segundos.
          </p>
        </div>

        <div className="lum-booking-wrapper">
          <div className="lum-booking-card">
            <BookingApp />
          </div>
        </div>
      </div>
    </section>
  );
}
