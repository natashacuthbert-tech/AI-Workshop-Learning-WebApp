import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import GlassModal from "../components/GlassModal";
import { SkeletonCard } from "../components/Skeleton";
import { speakers } from "../data/sampleData";
import { FeaturedSpeakerCard, SpeakerCard } from "../components/SpeakerCard";

const categories = [
  { key: "all", label: "All" },
  { key: "algorithms", label: "Core Research & Algorithms" },
  { key: "industry", label: "Industry Applications" },
  { key: "datasets", label: "Datasets & NLP" },
];

function categoryForSpeaker(speaker) {
  const tags = (speaker.tags || []).join(" ").toLowerCase();
  const topic = (speaker.sessionTopic || "").toLowerCase();

  if (tags.includes("industry") || tags.includes("deployment") || topic.includes("application")) return "industry";
  if (tags.includes("datasets") || tags.includes("nlp") || topic.includes("dataset")) return "datasets";
  return "algorithms";
}

function badgeLabelForSpeaker(speaker) {
  const cat = categoryForSpeaker(speaker);
  if (cat === "industry") return "Industry";
  if (cat === "datasets") return "Datasets";
  return "Research";
}

function SocialRow({ social = {} }) {
  return (
    <div className="social-row">
      {social.linkedin ? (
        <a className="social-link" href={social.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      ) : null}
      {social.github ? (
        <a className="social-link" href={social.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      ) : null}
      {social.twitter ? (
        <a className="social-link" href={social.twitter} target="_blank" rel="noreferrer">
          X/Twitter
        </a>
      ) : null}
      {social.scholar ? (
        <a className="social-link" href={social.scholar} target="_blank" rel="noreferrer">
          Google Scholar
        </a>
      ) : null}
    </div>
  );
}

function SpeakerDrawer({ open, speaker, onClose, onAddToSchedule }) {
  if (!speaker) return null;

  return (
    <GlassModal
      open={open}
      title="Speaker Profile"
      onClose={onClose}
      width="880px"
      footer={
        <div className="drawer-footer-actions">
          <button className="btn btn-ghost" onClick={onClose}>
            Close
          </button>
          <button className="btn btn-primary" onClick={() => onAddToSchedule?.(speaker.id)}>
            Add To Schedule
          </button>
        </div>
      }
    >
      <div className="drawer">
        <div className="drawer-grid">
          <div className="drawer-left">
            <img className="drawer-img" src={speaker.image} alt={speaker.name} />
            <div className="drawer-meta">
              <div className="drawer-name">{speaker.name}</div>
              <div className="drawer-title">{speaker.title}</div>
              <div className="drawer-org">{speaker.organization}</div>
            </div>
          </div>

          <div className="drawer-right">
            <div className="drawer-section">
              <div className="drawer-h">Biography</div>
              <p className="drawer-p">{speaker.biography}</p>
            </div>

            <div className="drawer-section">
              <div className="drawer-h">Session Details</div>
              <div className="drawer-chip">{speaker.sessionTopic}</div>
              <div className="drawer-tags">
                {(speaker.tags || []).map((t) => (
                  <span key={t} className="tag-chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="drawer-section">
              <div className="drawer-h">Links</div>
              <SocialRow social={speaker.social} />
            </div>
          </div>
        </div>
      </div>
    </GlassModal>
  );
}

export default function Speakers() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSpeakerId, setActiveSpeakerId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 650);
    return () => clearTimeout(t);
  }, []);

  const activeSpeaker = useMemo(() => {
    return speakers.find((s) => s.id === activeSpeakerId) || null;
  }, [activeSpeakerId]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return speakers
      .filter((s) => {
        if (category === "all") return true;
        return categoryForSpeaker(s) === category;
      })
      .filter((s) => {
        if (!q) return true;
        const hay = [s.name, s.title, s.organization, s.sessionTopic, (s.tags || []).join(" ")]
          .join(" ")
          .toLowerCase();
        return hay.includes(q);
      });
  }, [query, category]);

  const featured = filtered?.[0] || speakers[0];
  const rest = filtered?.slice(1) || [];

  const onOpenSpeaker = (id) => {
    setActiveSpeakerId(id);
    setDrawerOpen(true);
  };

  const onCloseDrawer = () => {
    setDrawerOpen(false);
    setActiveSpeakerId(null);
  };

  const onAddToSchedule = (speakerId) => {
    try {
      const key = "bb_schedule_speakers";
      const raw = localStorage.getItem(key);
      const prev = raw ? JSON.parse(raw) : [];
      const next = Array.from(new Set([...(prev || []), speakerId]));
      localStorage.setItem(key, JSON.stringify(next));
      setToast("Added to your schedule");
      setTimeout(() => setToast(null), 1800);
    } catch {
      setToast("Could not update schedule");
      setTimeout(() => setToast(null), 1800);
    }
    onCloseDrawer();
  };

  return (
    <div className="page">
      <Navbar />

      <section className="page-hero">
        <div className="page-hero-bg" aria-hidden="true" />

        <div className="page-hero-inner">
          <div className="page-hero-left fade-up fade-up--1" data-animate>
            <h1 className="page-hero-h1">
              <span className="page-hero-h1-line">Meet the Minds</span>
              <span className="page-hero-h1-line page-hero-h1-gradient">Shaping AI</span>
              <span className="page-hero-h1-line">Innovation.</span>
            </h1>

            <p className="page-hero-desc">
              Explore world class speakers across core research, industry breakthroughs and datasets powering modern AI.
            </p>
          </div>

          <div className="page-hero-right fade-up fade-up--2" data-animate>
            <div className="hero-visual" aria-hidden="true">
              <svg className="hero-network" viewBox="0 0 520 420" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="netGrad" x1="0" y1="0" x2="520" y2="420" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#60A5FA" stopOpacity="0.95" />
                    <stop offset="1" stopColor="#2563EB" stopOpacity="0.75" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Network lines */}
                <g filter="url(#glow)" stroke="url(#netGrad)" strokeWidth="1.2" opacity="0.9">
                  <path d="M86 140 C 160 80, 240 110, 306 86 S 430 92, 472 150" fill="none" strokeDasharray="6 8">
                    <animate attributeName="stroke-dashoffset" from="0" to="-40" dur="3.6s" repeatCount="indefinite" />
                  </path>
                  <path d="M52 240 C 140 190, 250 210, 330 230 S 440 292, 486 280" fill="none" strokeDasharray="7 10">
                    <animate attributeName="stroke-dashoffset" from="0" to="-60" dur="4.2s" repeatCount="indefinite" />
                  </path>
                  <path d="M110 330 C 200 290, 280 310, 340 300 S 444 260, 500 330" fill="none" strokeDasharray="6 9">
                    <animate attributeName="stroke-dashoffset" from="0" to="-45" dur="3.9s" repeatCount="indefinite" />
                  </path>
                </g>

                {/* Nodes */}
                <g>
                  {[
                    { x: 86, y: 140, r: 9 },
                    { x: 190, y: 96, r: 8 },
                    { x: 306, y: 86, r: 10 },
                    { x: 430, y: 92, r: 8 },
                    { x: 472, y: 150, r: 9 },
                    { x: 52, y: 240, r: 8 },
                    { x: 140, y: 190, r: 10 },
                    { x: 250, y: 210, r: 8 },
                    { x: 330, y: 230, r: 9 },
                    { x: 486, y: 280, r: 10 },
                    { x: 110, y: 330, r: 9 },
                    { x: 340, y: 300, r: 8 },
                    { x: 500, y: 330, r: 10 },
                  ].map((n, i) => (
                    <g key={i} filter="url(#glow)">
                      <circle cx={n.x} cy={n.y} r={n.r} fill="#60A5FA" opacity="0.18" />
                      <circle cx={n.x} cy={n.y} r={Math.max(3, n.r - 4)} fill="#60A5FA" opacity="0.85" />
                      <circle cx={n.x} cy={n.y} r={n.r} fill="none" stroke="#2563EB" strokeOpacity="0.35" strokeWidth="1">
                        <animate attributeName="r" values={`${n.r};${n.r + 6};${n.r}`} dur="2.6s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.35;0.05;0.35" dur="2.6s" repeatCount="indefinite" />
                      </circle>
                    </g>
                  ))}
                </g>
              </svg>

              {/* Floating abstract cards */}
              <div className="hero-float hero-float--a" />
              <div className="hero-float hero-float--b" />
              <div className="hero-float hero-float--c" />

              {/* Soft blobs */}
              <div className="hero-blob hero-blob--1" />
              <div className="hero-blob hero-blob--2" />
              <div className="hero-blob hero-blob--3" />
            </div>
          </div>
        </div>
      </section>

      <section className="section page-section">
        <div className="container">
          <div className="filters">
            <div className="speaker-filters-left fade-up fade-up--3" data-animate>
              <div className="speaker-search">
                <input
                  className="speaker-search-input"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search speakers by name, topic, or tags..."
                />
              </div>
            </div>

            <div className="filter-row" role="tablist" aria-label="Speaker categories">
              {categories.map((c) => (
                <button
                  key={c.key}
                  className={c.key === category ? "speaker-filter-pill speaker-filter-pill--active" : "speaker-filter-pill"}
                  onClick={() => setCategory(c.key)}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div className="featured-speakers-header" aria-label="Featured speakers">
            <div className="featured-speakers-header-top">
              <div className="featured-speakers-label">
                <span>FEATURED SPEAKERS</span>
              </div>
              <a className="featured-speakers-all" href="#" aria-label="View all speakers">
                View All Speakers <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="featured-speakers-divider" aria-hidden="true" />
            <div className="featured-speakers-title">Voices at the Frontier</div>
            <div className="featured-speakers-sub">
              Meet the researchers, engineers and innovators driving the future of Artificial Intelligence across Africa.
            </div>
          </div>

          {loading ? (
            <div style={{ marginTop: 18 }} className="speaker-loading">
              <div className="featured-speaker featured-speaker--skeleton" />
              <div className="more-speakers-title">4 More Speakers</div>
              <div className="modern-speaker-grid" aria-hidden="true">
                {Array.from({ length: 4 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>

            </div>
          ) : filtered.length === 0 ? (
            <div className="empty-state">No speakers match your filters.</div>
          ) : (
            <>
              <FeaturedSpeakerCard speaker={featured} onViewProfile={() => onOpenSpeaker(featured.id)} />

              <div className="more-speakers-wrap">
                <div className="more-speakers-title">4 More Speakers</div>

                <div className="modern-speaker-grid">
                  {rest.map((s) => (
                    <SpeakerCard
                      key={s.id}
                      speaker={s}
                      categoryBadge={badgeLabelForSpeaker(s)}
                      onViewProfile={() => onOpenSpeaker(s.id)}
                    />
                  ))}
                </div>
              </div>

            </>
          )}
        </div>
      </section>

      <SpeakerDrawer
        open={drawerOpen}
        speaker={activeSpeaker}
        onClose={onCloseDrawer}
        onAddToSchedule={onAddToSchedule}
      />

      {toast ? <div className="toast">{toast}</div> : null}

      <Footer />
    </div>
  );
}


