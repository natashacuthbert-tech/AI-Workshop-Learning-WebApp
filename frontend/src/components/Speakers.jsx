import { SpeakerCard } from "./SpeakerCard";

import { speakers as allSpeakers } from "../data/sampleData";


import "./Speakers.css";

function getRoleColorClass(role) {
  const r = String(role || "").toLowerCase();
  if (r.includes("industry")) return "sp-role-badge sp-role-badge--blue";
  if (r.includes("data")) return "sp-role-badge sp-role-badge--teal";
  if (r.includes("research")) return "sp-role-badge sp-role-badge--red";
  return "sp-role-badge sp-role-badge--blue";
}

function SpeakersHeader() {
  return (
    <div className="sp-header">
      <div className="sp-topLabelWrap">
        <div className="sp-topLabel">FEATURED SPEAKERS</div>
        <div className="sp-topLabelDividers" aria-hidden="true">
          <div className="sp-topLine" />
          <div className="sp-topLine sp-topLine--right" />
        </div>
      </div>

      <div className="sp-titleRow">
        <h2 className="sp-title">Voices at the Frontier</h2>
        <a className="sp-allLink" href="/speakers" aria-label="All speakers">
          All speakers →
        </a>
      </div>
    </div>
  );
}

function SpeakersBottomButton() {
  return (
    <div className="sp-bottomWrap">
      <a className="sp-bottomBtn" href="/speakers" aria-label="View All 5 Speakers">
        <span className="sp-bottomIcon" aria-hidden="true">
          👥
        </span>
        <span>View All 5 Speakers</span>
      </a>
    </div>
  );
}

export default function Speakers({
  featured = allSpeakers.slice(0, 3),
  onViewProfile,
}) {
  return (
    <section className="speakers" aria-label="Featured speakers">
      <div className="sp-container">
        <SpeakersHeader />

        <div className="sp-grid" role="list">
          {(featured || []).slice(0, 3).map((sp, idx) => (
            <div key={sp?.id || idx} role="listitem" className="sp-cardWrap">
                <SpeakerCard
                  speaker={sp}
                  roleBadgeClass={getRoleColorClass(sp?.title)}
                  onViewProfile={onViewProfile}
                />
            </div>
          ))}
        </div>

        <SpeakersBottomButton />
      </div>
    </section>
  );
}

