import React, { useState } from "react";

export default function FlipCard({ service }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped((prev) => !prev);

  const handleReserve = (e) => {
    e.stopPropagation();
    // evita que el clic cierre la tarjeta
    // aquí puedes redirigir a la sección de reservas o abrir un modal
    document.getElementById("reservas")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div onClick={handleFlip} className="card-rotation">
      <div className={`card-3d ${flipped ? "flipped" : ""}`}>
        <CardFront service={service} />
        <CardBack service={service} onReserve={handleReserve} />
      </div>
    </div>
  );
}

function CardFront({ service }) {
  return (
    <div className="lum-service-card card-front">
      <div className={`lum-card-img ${service.bg}`}>
        {service.badge && (
          <span className="lum-badge-card">{service.badge}</span>
        )}
      </div>
      <div className="uk-card-body service-card-body">
        <h3 className="uk-card-title lum-team-name service-title">
          {service.title}
        </h3>
        <p className="service-description">{service.desc}</p>
        <div className="service-price-category">
          <span className="lum-price">{service.price}</span>
          <span className="lum-price">{service.duration}</span>
        </div>
      </div>
    </div>
  );
}

function CardBack({ onReserve }) {
  return (
    <div className="lum-service-card service-card-back">
      <div>Aquí se agrega imagen del producto final</div>
      <button className="btn-book reservation-button" onClick={onReserve}>
        Reservar ahora
      </button>
    </div>
  );
}
