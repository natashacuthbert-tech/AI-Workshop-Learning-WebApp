import "./ModernSpeakerCard.css";


function ArrowIcon() {
  return (
    <svg
      className="msc-arrow"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ModernSpeakerCard({ speaker, onViewProfile }) {
  const s = speaker || {};
  const tags = (s.tags || []).map((t) => String(t).trim()).filter(Boolean);

  return (
    <article className="modern-speaker-card" aria-label={s.name ? `Speaker: ${s.name}` : "Speaker card"}>
      <div className="modern-speaker-content">
        <div className="msc-profileWrap" aria-hidden="true">
          <img
            className="msc-profileImg"
            src={s.image}
            alt={s.name || "Speaker"}
            loading="lazy"
          />
        </div>

        <div className="msc-name">{s.name}</div>
        <div className="msc-org">{s.organization}</div>
        <div className="msc-title">{s.title}</div>

        <div className="msc-badge">{s.category || "Speaker"}</div>

        <div className="msc-sessionGlass">
          <div className="msc-sessionTitle">{s.sessionTopic}</div>
        </div>

        <div className="msc-tags" aria-label="Speaker tags">
          {(tags.length ? tags : ["AI Research"]).slice(0, 5).map((t) => (
            <span key={t} className="msc-tag">
              {t}
            </span>
          ))}
        </div>

        <div className="msc-spacer" />

        <div className="msc-footerBtn">
          <button
            type="button"
            className="msc-viewBtn"
            onClick={() => onViewProfile?.(s)}
            aria-label={`View profile${s.name ? `: ${s.name}` : ""}`}
          >
            View Profile <ArrowIcon />
          </button>
        </div>
      </div>
    </article>
  );
}

