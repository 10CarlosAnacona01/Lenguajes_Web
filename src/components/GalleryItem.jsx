import React, { useRef, useEffect } from "react";

export default function GalleryItem({ item }) {
  const anchorRef = useRef(null);

  useEffect(() => {
    if (anchorRef.current && window.UIkit) {
      window.UIkit.lightbox(anchorRef.current.closest("[uk-lightbox]"));
    }
  }, []);

  const imgSrc = item.img;

  return (
    <div uk-lightbox="animation: fade">
      <a ref={anchorRef} href={imgSrc} data-caption={item.label}>
        <div
          className="lum-gallery-item"
          style={{
            backgroundImage: "url(" + imgSrc + ")",
          }}
        >
          <div className="gallery-overlay" />
          <span className="lum-gallery-label">{item.label}</span>
        </div>
      </a>
    </div>
  );
}
