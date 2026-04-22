import React, { useEffect, useRef } from "react";
import Logo from "../img/slogan.jpg";

export default function Navbar() {
  const stickyRef = useRef(null);

  useEffect(() => {
    const el = stickyRef.current;
    if (!el || !window.UIkit) return;
    const navbar = el.querySelector(".lum-navbar");

    const unsub1 = window.UIkit.util.on(el, "active", () => {
      if (navbar) navbar.style.boxShadow = "0 4px 30px rgba(244,114,182,.18)";
    });
    const unsub2 = window.UIkit.util.on(el, "inactive", () => {
      if (navbar) navbar.style.boxShadow = "none";
    });
    return () => {
      unsub1?.();
      unsub2?.();
    };
  }, []);

  return (
    <div
      ref={stickyRef}
      uk-sticky="sel-target: .lum-navbar; cls-active: uk-navbar-sticky; top: 50"
    >
      <nav className="lum-navbar uk-navbar-container" uk-navbar="">
        <div className="uk-navbar-left">
          <a className="uk-navbar-item uk-logo lum-logo" href="/">
            <img src={Logo} width="200" height="110" alt="Spa Uñas Logo"className="lum-logo-img" />
          </a>
        </div>

        <div className="uk-navbar-right uk-visible@m">
          <ul className="uk-navbar-nav">
            {["#servicios", "#galeria", "#equipo", "#reseñas", "#reservas"].map(
              (href, i) => {
                const labels = [
                  "Servicios",
                  "Galería",
                  "Equipo",
                  "Reseñas",
                  "Reservas",
                ];
                return (
                  <li key={href}>
                    <a href={href} uk-scroll="">
                      {labels[i]}
                    </a>
                  </li>
                );
              },
            )}
          </ul>
        </div>

        <div className="uk-navbar-right uk-hidden@m">
          <button
            className="uk-navbar-toggle"
            uk-navbar-toggle-icon=""
            uk-toggle="target: #offcanvas-nav"
            type="button"
            aria-label="Abrir menú"
          />
        </div>
      </nav>

      {/* Off-canvas mobile */}
      <div
        id="offcanvas-nav"
        uk-offcanvas="mode: slide; overlay: true"
        aria-label="Cerrar menú"
      >
        <div className="uk-offcanvas-bar lum-offcanvas">
          <button className="uk-offcanvas-close" type="button" uk-close="" />
          <ul className="uk-nav uk-nav-default mt-32">
            {["#servicios", "#galeria", "#equipo", "#reseñas", "#reservas"].map(
              (href, i) => {
                const labels = [
                  "Servicios",
                  "Galería",
                  "Equipo",
                  "Reseñas",
                  "Reservas",
                ];
                return (
                  <li key={href}>
                    <a
                      href={href}
                      uk-scroll=""
                      onClick={() =>
                        window.UIkit?.offcanvas("#offcanvas-nav").hide()
                      }
                    >
                      {labels[i]}
                    </a>
                  </li>
                );
              },
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
