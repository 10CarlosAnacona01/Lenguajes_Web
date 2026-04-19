import React from "react";

export default function Hero() {
  return (
    <section
      className="lum-hero uk-section"
      uk-scrollspy="cls: uk-animation-fade; repeat: true"
    >
      <div className="uk-container uk-text-center">
        <div className="lum-hero-badge">
          ✨ Spa Uñas Premium · Neiva, Colombia
        </div>
        <h1 className="lum-hero-title">
          El arte en
          <br />
          <em>tus manos</em>
        </h1>
        <p className="lum-hero-sub">
          Diseños exclusivos, productos certificados y una experiencia spa que
          mereces
        </p>
        <div className="lum-hero-actions">
          <a href="#reservas" uk-scroll="" className="lum-btn-primary">
            Reserva tu cita
          </a>
          <a href="#servicios" uk-scroll="" className="lum-btn-ghost">
            Ver servicios
          </a>
        </div>
        <div className="lum-hero-stats">
          <div className="lum-stat">
            <span className="lum-stat-num">+500</span>
            <span className="lum-stat-label">Clientas felices</span>
          </div>
          <div className="lum-stat">
            <span className="lum-stat-num">4.7 ★</span>
            <span className="lum-stat-label">Valoración</span>
          </div>
          <div className="lum-stat">
            <span className="lum-stat-num">+3</span>
            <span className="lum-stat-label">Años de experiencia</span>
          </div>
        </div>
      </div>
    </section>
  );
}
