import React from "react";
import { TEAM_DATA } from "../data/team.js";

export default function TeamSection() {
  return (
    <section id="equipo" className="uk-section lum-section-dark">
      <div className="uk-container">
        <div className="lum-section-header uk-text-center">
          <div className="lum-section-tag">Equipo</div>
          <h2 className="lum-section-title">
            Las artistas <em>detrás</em>
          </h2>
          <p className="lum-section-sub">
            Profesionales apasionadas que convierten cada cita en una obra de
            arte.
          </p>
        </div>

        <div
          id="team-grid"
          className="uk-grid uk-grid-match uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-medium"
          uk-grid=""
          uk-scrollspy="cls: uk-animation-slide-bottom-small; target: > div; delay: 100; repeat: true"
        >
          {TEAM_DATA.map((member) => (
            <div key={member.name}>
              <div className="uk-card lum-team-card">
                <div className="uk-card-body">
                  <div className={`lum-team-avatar ${member.bg}`}>
                    {member.emoji}
                  </div>
                  <div className="lum-team-name">{member.name}</div>
                  <div className="lum-team-role">{member.role}</div>
                  <div className="lum-team-stars">{member.stars}</div>
                  <div className="lum-specs">
                    {member.specs.map((s) => (
                      <span key={s} className="lum-spec-tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
