import React from "react";
import { SERVICES_DATA } from "../data/services.js";
import { SERVICE_CATEGORIES } from "../data/services.js";

export default function ServiceCategoryFilter({ active, onChange }) {
  return (
    <div
      className="uk-flex uk-flex-center uk-flex-wrap"
      style={{ gap: 8, marginBottom: 28 }}
    >
      {SERVICE_CATEGORIES.map((cat) => (
        <button
          key={cat}
          className={active === cat ? "lum-btn-primary" : "lum-btn-ghost"}
          style={{ padding: "6px 18px", fontSize: "0.78rem" }}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
