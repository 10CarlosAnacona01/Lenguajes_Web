import { SERVICES_DATA } from "../data/services.js";
import FlipCard from "./FlipCard.jsx";

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
            Toca cada tarjeta para ver el resultado del servicio.
          </p>
        </div>

        <div
          className="uk-grid uk-grid-match uk-child-width-1-2@s uk-child-width-1-3@m"
          data-uk-grid
        >
          {SERVICES_DATA.map((service, index) => (
            <div  key={index}>
              <FlipCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
