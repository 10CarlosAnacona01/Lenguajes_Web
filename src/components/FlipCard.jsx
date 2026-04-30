import React, { useState } from "react";

export default function FlipCard({ service }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped((prev) => !prev);

  const handleReserve = (e) => {
    e.stopPropagation(); // evita que el clic cierre la tarjeta
    // aquí puedes redirigir a la sección de reservas o abrir un modal
    document.getElementById("reservas")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      onClick={handleFlip}
      style={{ perspective: "900px", height: "260px", cursor: "pointer" }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.55s cubic-bezier(0.4, 0.2, 0.2, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <CardFront service={service} />
        <CardBack service={service} onReserve={handleReserve} />
      </div>
    </div>
  );
}

function CardFront({ service }) {
  return (
    <div
      className="lum-service-card"
      style={{
        position: "absolute",
        inset: 0,
        backfaceVisibility: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className={`lum-card-img ${service.bg}`}>
        <span className="service-icon">{service.icon}</span>
        {service.badge && (
          <span className="lum-badge-card">{service.badge}</span>
        )}
        <span
          style={{
            position: "absolute",
            bottom: 6,
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "0.6rem",
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          toca para ver resultado
        </span>
      </div>
      <div className="uk-card-body service-card-body">
        <h3 className="uk-card-title lum-team-name service-title">
          {service.title}
        </h3>
        <p className="service-description">{service.desc}</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "auto",
          }}
        >
          <span className="lum-price">{service.price}</span>
          <span
            style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.35)" }}
          >
            {service.category}
          </span>
        </div>
      </div>
    </div>
  );
}

function CardBack({ service, onReserve }) {
  return (
    <div
      className="lum-service-card"
      style={{
        position: "absolute",
        inset: 0,
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        padding: "20px 18px",
        textAlign: "center",
        background: "rgba(34,16,42,0.98)",
      }}
    >
      <div
        className={`lum-team-avatar ${service.imgBg}`}
        style={{ width: 80, height: 80, fontSize: "2rem" }}
      >
        {service.resultIcon}
      </div>

      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1rem",
          fontWeight: 600,
          color: "var(--lum-pink-light)",
        }}
      >
        {service.title}
      </p>

      <div>
        <p
          style={{
            fontSize: "0.65rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "rgba(255,255,255,0.35)",
            marginBottom: 4,
          }}
        >
          Resultado
        </p>
        <p
          style={{
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.5,
          }}
        >
          {service.result}
        </p>
      </div>

      <span className="lum-price">⏱ {service.duration}</span>

      <button
        className="btn-book"
        style={{ marginTop: 4, padding: "8px 20px", fontSize: "0.78rem" }}
        onClick={onReserve}
      >
        Reservar ahora
      </button>
    </div>
  );
}
