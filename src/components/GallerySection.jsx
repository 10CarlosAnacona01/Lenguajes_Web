import React from "react";
import { GALLERY_ITEMS } from "../data/gallery_items.js";

export default function GallerySection() {
  return (
    <section id="galeria" className="uk-section lum-section-light">
      <div className="uk-container">
        <div className="lum-section-header uk-text-center">
          <div className="lum-section-tag">Galería</div>
          <h2 className="lum-section-title">
            Arte que <em>inspira</em>
          </h2>
          <p className="lum-section-sub">
            Cada diseño es único. Trae tu referencia o déjate sorprender.
          </p>
        </div>

        <div
          className="uk-grid uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m"
          uk-grid=""
          uk-scrollspy="cls: uk-animation-fade; target: > div; delay: 60; repeat: true"
        >
          {GALLERY_ITEMS.map((item) => (
            <div key={item.cls}>
              <div className={`lum-gallery-item ${item.cls}`}>
                <span className="lum-gallery-emoji">{item.emoji}</span>
                <span className="lum-gallery-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
