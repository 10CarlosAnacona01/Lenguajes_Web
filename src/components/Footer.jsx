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
            <div className="lum-footer-logo">💅 Lumière Nail Spa</div>
            <p className="lum-footer-tagline">
              Arte en tus manos.
              <br />
              Experiencias que perduran.
            </p>
            <div className="lum-footer-socials">
              <a href="#" aria-label="Instagram">
                📷
              </a>
              <a href="#" aria-label="TikTok">
                🎵
              </a>
              <a href="#" aria-label="WhatsApp">
                💬
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
              <li>📍 Cali, Valle del Cauca, Colombia</li>
              <li>📞 +57 300 000 0000</li>
              <li>📧 hola@lumierenailspa.co</li>
              <li>🕐 Lun–Sáb: 9 AM – 7 PM</li>
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
            © {new Date().getFullYear()} Lumière Nail Spa · Todos los derechos
            reservados.
          </p>
          <p style={{ opacity: 0.45, fontSize: ".75rem", marginTop: 4 }}>
            Hecho con 💕 en Cali
          </p>
        </div>
      </div>
    </footer>
  );
}
