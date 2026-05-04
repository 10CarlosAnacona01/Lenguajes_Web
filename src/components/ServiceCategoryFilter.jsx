import React from "react";
import { SERVICES_DATA } from "../data/services.js";
import { SERVICE_CATEGORIES } from "../data/services.js";

export default function ServiceCategoryFilter({ active, onChange }) {
  return (
    <div className="uk-flex uk-flex-center uk-flex-wrap filter-space-buttons">
      {SERVICE_CATEGORIES.map((cat) => (
        <button
          key={cat}
          className={`filter-service-button ${
            active === cat ? "lum-btn-primary" : "lum-btn-ghost"
          }`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
