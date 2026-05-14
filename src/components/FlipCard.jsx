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
    <div onMouseEnter={handleFlip} onMouseLeave={() => setFlipped(false)} className="card-rotation">
      <div className={`card-3d ${flipped ? "flipped" : ""}`}>
        <CardFront service={service} />
        <CardBack service={service} />
      </div>
    </div>
  );
}

function CardFront({ service }) {
  return (
     <div className="lum-service-card service-card-front " style={{backgroundImage: `url(${service.img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"}} >

      <h3 className="service-card-front-content lum-team-name ">
        {service.title}
      </h3>
    
      </div>
  );
}

function CardBack({ service }) {
  return (

    <div className="lum-service-card service-card-back">
    
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
