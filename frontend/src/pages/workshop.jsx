import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { scheduleSessions, speakers } from "../data/sampleData";

const LS_KEY = "bb_schedule_bookmarks";

function trackBadge(type) {
  const t = (type || "").toLowerCase();
  if (t.includes("keynote")) return { label: "Keynote", cls: "badge-keynote" };
  if (t.includes("workshop")) return { label: "Workshop", cls: "badge-workshop" };
  if (t.includes("panel")) return { label: "Panel", cls: "badge-panel" };
  return { label: "Break", cls: "badge-break" };
}

function safeParseJSON(raw, fallback) {
  try {
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function exportSchedule(day, sessions) {
  const payload = {
    event: "AI Research Workshop 2026",
    day,
    generatedAt: new Date().toISOString(),
    sessions: sessions.map((s) => ({
      time: s.time,
      type: s.type,
      track: s.track,
      title: s.title,
      speaker: s.speakerId ? speakers.find((sp) => sp.id === s.speakerId)?.name : null,
      location: s.location,
    })),
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `schedule-day-${day}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function SessionCard({ session, saved, onToggle }) {
  const speakerName = session.speakerId
    ? speakers.find((sp) => sp.id === session.speakerId)?.name
    : null;

  const badge = trackBadge(session.type);

  return (
    <div className="session-card">
      <div className="session-card-grid">
        <div className="session-time-col">{session.time}</div>

        <div className="session-content">
          <div className="session-title">{session.title}</div>

          <div className="track-pill-wrap">
            <span className={`track-pill ${badge.cls}`}>{badge.label}</span>
          </div>

          <div className="session-meta">
            <div className="session-loc">
              📍 {speakerName ? speakerName : session.location}
            </div>
          </div>

          <div className="session-desc">{session.description}</div>
        </div>

        <div className="session-actions">
          <button
            className={saved ? "action-btn action-btn-on" : "action-btn"}
            onClick={() => onToggle(session.id)}
            aria-label="Bookmark"
          >
            🔖
          </button>
          <button className="action-btn" aria-label="Add to calendar">
            📅
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Workshops() {
  const [day, setDay] = useState(1);
  const [bookmarks, setBookmarks] = useState(() => {
    const raw = localStorage.getItem(LS_KEY);
    const parsed = safeParseJSON(raw, []);
    return Array.isArray(parsed) ? parsed : [];
  });









  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(bookmarks || []));
  }, [bookmarks]);

  const sessions = useMemo(() => {
    const items = scheduleSessions.filter((s) => s.day === day);
    return items;
  }, [day]);

  const isSaved = (id) => (bookmarks || []).includes(id);

  const toggle = (id) => {
    setBookmarks((prev) => {
      const list = Array.from(new Set(prev || []));
      if (list.includes(id)) return list.filter((x) => x !== id);
      return [...list, id];
    });
  };

  return (
    <div className="page">
      <Navbar />

      <section className="schedule-hero">
        <div className="schedule-hero-bg" aria-hidden="true" />
        <div className="schedule-hero-inner">
          <div className="schedule-hero-header">
            <div className="schedule-conference-title">CONFERENCE AGENDA</div>
            <div className="schedule-days-title">2-Day Schedule</div>
          </div>

          <div className="schedule-metadata">
            <div className="meta-item">📍 AICAD</div>
            <div className="meta-item">📅 9th &amp; 10th July 2026</div>
            <div className="meta-item">🕒 8:00 AM Start</div>
          </div>

          <div className="schedule-day-tabs" role="tablist" aria-label="Schedule day tabs">
            <button
              className={day === 1 ? "day-tab day-tab-active" : "day-tab"}
              role="tab"
              aria-selected={day === 1}
              onClick={() => setDay(1)}
            >
              Day 1 · 9th July
            </button>
            <button
              className={day === 2 ? "day-tab day-tab-active" : "day-tab"}
              role="tab"
              aria-selected={day === 2}
              onClick={() => setDay(2)}
            >
              Day 2 · 10th July
            </button>
          </div>

          <div className="schedule-actions">
            <button className="btn btn-primary" onClick={() => exportSchedule(day, sessions)}>
              Export schedule
            </button>
          </div>
        </div>
      </section>

      <section className="section schedule-section">
        <div className="container">
          <div className="track-legend">
            <div className="legend-item"><span className="badge-keynote" /> Keynote</div>
            <div className="legend-item"><span className="badge-workshop" /> Workshop</div>
            <div className="legend-item"><span className="badge-panel" /> Panel</div>
            <div className="legend-item"><span className="badge-break" /> Break</div>
          </div>

          <div className="sessions-list">
            {sessions.map((s) => (
              <SessionCard key={s.id} session={s} saved={isSaved(s.id)} onToggle={toggle} />
            ))}
          </div>

          <div className="saved-foot">
            <div className="muted">Your bookmarks are saved on this device.</div>
            <div className="saved-count">Bookmarks: {(bookmarks || []).length}</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

