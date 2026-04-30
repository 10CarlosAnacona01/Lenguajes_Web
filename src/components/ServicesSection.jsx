import React, { useState } from "react";
import { SERVICES_DATA } from "../data/services.js";
import ServiceCategoryFilter from "./ServiceCategoryFilter.jsx";
import FlipCard from "./FlipCard.jsx";

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="servicios" className="uk-section lum-section-dark">
      <div className="uk-container">
        <div className="lum-section-header uk-text-center">
          <div className="lum-section-tag">Servicios</div>
          <h2 className="lum-section-title">
            Lo que hacemos <em>mejor</em>
          </h2>
          <p className="lum-section-sub">
            Toca cada tarjeta para ver el resultado del servicio.
          </p>
        </div>

        <ServiceCategoryFilter
          active={activeCategory}
          onChange={setActiveCategory}
        />

        <div
          className="uk-grid uk-grid-match uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-medium"
          uk-grid=""
        >
          {filtered.map((service) => (
            <div key={service.title}>
              <FlipCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
