import ModernSpeakerCard from "./ModernSpeakerCard";

import "./SpeakerGrid.css";

export default function SpeakerGrid({ speakers = [], onViewProfile }) {
  return (
    <div className="modern-speaker-grid" aria-label="Speakers grid">
      {speakers.map((s, idx) => (
        <ModernSpeakerCard
          key={s?.id || `${s?.name || "speaker"}-${idx}`}
          speaker={s}
          onViewProfile={onViewProfile}
        />
      ))}
    </div>
  );
}

