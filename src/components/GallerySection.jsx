import React from "react";

const GALLERY_ITEMS = [
  { emoji: "🌸", label: "Floral Pastel", cls: "g1" },
  { emoji: "💎", label: "Crystal Chrome", cls: "g2" },
  { emoji: "🌙", label: "Galaxy Night", cls: "g3" },
  { emoji: "🌿", label: "Botanical Green", cls: "g4" },
  { emoji: "🦋", label: "Butterfly Dreams", cls: "g5" },
  { emoji: "🔥", label: "Lava Ombré", cls: "g6" },
];

export default function GallerySection() {
  return (
    <section id="galeria" className="uk-section lum-section-light">
      <div className="uk-container">
        <div className="lum-section-header uk-text-center">
          <div className="lum-section-tag">🎨 Galería</div>
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
