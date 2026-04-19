import React from "react";

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

            {/* Cambiar color de los íconos */}
            <div className="lum-footer-socials">
              <a href="#" aria-label="Instagram">
                <span uk-icon="instagram"></span>
              </a>
              <a href="#" aria-label="TikTok">
                <span uk-icon="tiktok"></span>
              </a>
              <a href="#" aria-label="WhatsApp">
                <span uk-icon="whatsapp"></span>
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="lum-footer-heading">Servicios</h4>
            <ul className="lum-footer-list">
              {[
                "Manicura Clásica",
                "Gel Permanente",
                "Nail Art Premium",
                "Acrílicas",
                "Spa de Manos",
                "Pedicura Luxury",
              ].map((s) => (
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
              <li>📍 Neiva, Huila, Colombia</li>
              <li>📞 +57 322 936 0394</li>
              <li>📧 spa_mookha@gmail.com</li>
              <li>🕐 Lun–Dom: 9 AM – 6 PM</li>
            </ul>
            <a
              href="#reservas"
              uk-scroll=""
              className="lum-btn-primary"
              style={{ display: "inline-block", marginTop: 16 }}
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
          <p style={{ opacity: 1, fontSize: ".8rem", marginTop: 4.5 }}>
            Hecho con amor en Neiva ♡
          </p>
        </div>
      </div>
    </footer>
  );
}
