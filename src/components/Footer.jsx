import React from "react";
import { CONTACT_DATA } from "../data/contact";
import { SHORT_SERVICES } from "../data/services";

export default function Footer() {
  return (
    <footer className="lum-footer">
      <div className="uk-container">
        <div
          className="uk-grid uk-grid-medium uk-child-width-1-1 uk-child-width-1-3@m"
          uk-grid=""
        >
          {/* Marca */}
          <div>
            <div className="lum-footer-logo">MOOKHA Spa de Uñas</div>
            <p className="lum-footer-tagline">
              Arte en tus manos.
              <br />
              Experiencias que perduran.
            </p>

            <div className="lum-footer-socials">
              {/* Se cancela el comportamiento por defecto del enlace */}
              <a
                href="#!"
                onClick={(e) => e.preventDefault()}
                aria-label="Instagram"
              >
                <span uk-icon="instagram"></span>
              </a>
              <a
                href="#!"
                onClick={(e) => e.preventDefault()}
                aria-label="TikTok"
              >
                <span uk-icon="tiktok"></span>
              </a>
              <a
                href="#!"
                onClick={(e) => e.preventDefault()}
                aria-label="WhatsApp"
              >
                <span uk-icon="whatsapp"></span>
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="lum-footer-heading">Servicios</h4>
            <ul className="lum-footer-list">
              {Object.values(SHORT_SERVICES).map((s) => (
                <li key={s}>
                  <a href="#servicios" uk-scroll="">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="lum-footer-heading">Contáctanos</h4>
            <ul className="lum-footer-list lum-footer-contact">
              <li>📍 {CONTACT_DATA.location}</li>
              <li>📞 {CONTACT_DATA.phone}</li>
              <li>📧 {CONTACT_DATA.email}</li>
              <li>🕐 {CONTACT_DATA.timetable}</li>
            </ul>
            <a
              href="#reservas"
              uk-scroll=""
              className="lum-btn-primary footer-reservations"
            >
              Reservar ahora
            </a>
          </div>
        </div>

        <div className="lum-footer-bottom">
          <p>
            © {new Date().getFullYear()} MOOKHA Spa de Uñas · Todos los derechos
            reservados
          </p>
          <p className="footer-credit">Hecho con amor en Neiva ♡</p>
        </div>
      </div>
    </footer>
  );
}
