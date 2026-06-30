

function ArrowIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 6V12L16 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 22C12 22 18 16.5685 18 12C18 7.58172 14.4183 4 10 4C5.58172 4 2 7.58172 2 12C2 16.5685 8 22 8 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(4 0)"
      />
      <path
        d="M10 13C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11C9.44772 11 9 11.4477 9 12C9 12.5523 9.44772 13 10 13Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function FeaturedSpeakerCard({ speaker, onViewProfile }) {
  const category = speaker?.category || "Keynote";
  const duration = speaker?.duration || "75 min";
  const timeLabel = speaker?.time || "09:00 - 10:15";
  const venueLabel = speaker?.venue || "JHUB Africa Auditorium";

  const tags = (speaker.tags || []).map((t) => String(t).trim()).filter(Boolean);
  const firstTag = tags[0] || "AI Research";

  return (
    <div className="speaker-conference-card speaker-conference-card--featured" data-speaker-card>
      <div className="speaker-conference-card-inner">
        <div className="speaker-conference-avatarWrap" aria-hidden="true">
          <div className="speaker-conference-avatarGlow" />
          <img className="speaker-conference-avatar" src={speaker.image} alt={speaker.name} />
        </div>

        <div className="speaker-conference-content">
          <div className="speaker-conference-metaTop">
            <span className="speaker-conference-badge">{category}</span>
            <span className="speaker-conference-duration">{duration}</span>
          </div>

          <div className="speaker-conference-name">{speaker.name}</div>
          <div className="speaker-conference-org">{speaker.organization}</div>
          <div className="speaker-conference-role">{speaker.title}</div>

          <div className="speaker-conference-sessionTitle">{speaker.sessionTopic}</div>

          <div className="speaker-conference-detailRow">
            <span className="speaker-conference-detailIcon">
              <ClockIcon />
            </span>
            <span className="speaker-conference-detailText">{timeLabel}</span>
          </div>
          <div className="speaker-conference-detailRow">
            <span className="speaker-conference-detailIcon">
              <LocationIcon />
            </span>
            <span className="speaker-conference-detailText">{venueLabel}</span>
          </div>

          <div className="speaker-conference-tags" aria-label="AI specialization tags">
            {tags.length ? (
              tags.slice(0, 6).map((t) => (
                <span key={t} className="speaker-tag">
                  {t}
                </span>
              ))
            ) : (
              <span className="speaker-tag">{firstTag}</span>
            )}
          </div>
        </div>

        <div className="speaker-conference-cta">
          <button type="button" className="speaker-conference-ctaBtn" onClick={onViewProfile}>
            <span>View Profile</span>
            <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export function SpeakerCard({ speaker, categoryBadge, onViewProfile }) {
  const s = speaker || {};
  const tags = (s.tags || []).map((t) => String(t).trim()).filter(Boolean);
  const cat = categoryBadge || s?.category || "Speaker";

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

        <div className="msc-badge">{cat}</div>

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



