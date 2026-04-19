import React from "react";
import { REVIEWS_DATA } from "../data/reviews.js";

export default function ReviewsSection() {
  return (
    <section id="reseñas" className="uk-section lum-section-light">
      <div className="uk-container">
        <div className="lum-section-header uk-text-center">
          <div className="lum-section-tag">⭐ Reseñas</div>
          <h2 className="lum-section-title">
            Lo que dicen <em>ellas</em>
          </h2>
          <p className="lum-section-sub">
            Más de 500 clientas satisfechas avalan nuestro trabajo.
          </p>
        </div>

        <div
          className="uk-position-relative"
          uk-slider="autoplay: true; autoplay-interval: 4000; sets: true"
        >
          <div className="uk-slider-container uk-roundrob">
            <ul className="uk-slider-items uk-grid uk-grid-medium uk-child-width-1-1@s uk-child-width-1-2@m uk-child-width-1-3@l">
              {REVIEWS_DATA.map((review) => (
                <li key={review.name}>
                  <div className="uk-card lum-review-card">
                    <div className="uk-card-body">
                      <div className="lum-review-stars">{review.stars}</div>
                      <p className="lum-review-text">"{review.text}"</p>
                      <div className="lum-review-author">
                        <div className={`lum-author-avatar ${review.av}`}>
                          {review.em}
                        </div>
                        <div>
                          <div className="lum-author-name">{review.name}</div>
                          <div className="lum-author-sub">{review.sub}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <ul
            className="uk-slider-nav uk-dotnav uk-flex-center"
            style={{ marginTop: 24 }}
          ></ul>
        </div>
      </div>
    </section>
  );
}
