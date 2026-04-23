import React from "react";
import { SERVICES_DATA } from "../data/services.js";

export default function ServicesSection() {
  return (
    <section id="servicios" className="uk-section lum-section-dark">
      <div className="uk-container">
        <div className="lum-section-header uk-text-center">
          <div className="lum-section-tag">Servicios</div>
          <h2 className="lum-section-title">
            Lo que hacemos <em>mejor</em>
          </h2>
          <p className="lum-section-sub">
            Cada servicio es una experiencia diseñada para mimarte de pies a
            manos.
          </p>
        </div>

        <div
          className="uk-grid uk-grid-match uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-medium"
          uk-grid=""
          uk-scrollspy="cls: uk-animation-slide-bottom-small; target: > div; delay: 80; repeat: true"
        >
          {SERVICES_DATA.map((service) => (
            <div key={service.title}>
              <div className="uk-card lum-service-card">
                <div className={`lum-card-img ${service.bg}`}>
                  <span className="service-icon"></span>
                  {service.badge && (
                    <span className="lum-badge-card">{service.badge}</span>
                  )}
                </div>
                <div className="uk-card-body service-card-body">
                  <h3 className="uk-card-title lum-team-name service-title">
                    {service.title}
                  </h3>
                  <p className="service-description">{service.desc}</p>
                  <span className="lum-price">{service.price}</span>
                  <p className="lum-category">{service.category}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
