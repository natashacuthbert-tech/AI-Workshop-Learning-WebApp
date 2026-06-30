import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { scheduleSessions, speakers } from "../data/sampleData";
import { focusAreas as focusAreaPillars } from "../data/focusAreas";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Cpu,
  Database,
  Layers3,
  Zap,
  Lightbulb,
} from "lucide-react";
import Speakers from "../components/Speakers";

function Home() {



  const focusAreas = focusAreaPillars.map((p) => ({
    ...p,
    icon:
      p.key === "algorithms"
        ? Cpu
        : p.key === "datasets"
          ? Database
          : p.key === "methodologies"
            ? Layers3
            : p.key === "real-applications"
              ? Zap
              : Lightbulb,
  }));

    

  






  const schedulePreview = scheduleSessions
    .slice(0, 4)
    .map((s) => ({
      ...s,
      speakerName: s.speakerId
        ? speakers.find((sp) => sp.id === s.speakerId)?.name
        : null,
    }));

  return (
    <div className="page">
      <Navbar />

      {/* HOME HERO (Figma-style) */}
      <section className="home-hero" id="top">

        <div className="home-hero-bg" aria-hidden="true" />

        <div className="home-hero-gradient" aria-hidden="true" />
        <div className="home-hero-grid" aria-hidden="true" />
        <div className="home-hero-year" aria-hidden="true">
          2026
        </div>



        <div className="home-hero-inner">
          <div className="reg-open-badge" style={{ borderColor: "rgba(59,130,246,0.7)", background: "rgba(59,130,246,0.10)" }}>
            Registration open
          </div>




          <h1 className="home-hero-title" aria-label="AI Research Workshop 2026">
            <span className="title-line title-ai">AI RESEARCH</span>
            <span className="title-line title-workshop">WORKSHOP</span>
            <span className="title-line title-year">2026</span>
          </h1>

          <div className="hero-info">
            <div className="info-pill">
              <CalendarDays size={20} />
              <span>9th &amp; 10th July 2026</span>
            </div>

            <div className="info-pill">
              <Clock3 size={20} />
              <span>8:00 AM Onwards</span>
            </div>

            <div className="info-pill">
              <MapPin size={20} />
              <span>AICAD</span>
            </div>
          </div>

          <p className="home-hero-desc">
            Engage with leading thinkers, hands-on labs, and real-world innovation.
          </p>

          
        </div>
      </section>


      {/* CONTENT SECTIONS */}
      {/* EVENT DETAILS + FOCUS AREAS */}
      <section className="section">
        <div className="container">
          <div className="event-details">
            <div className="event-details-left">
              <div className="details-header">
                <div className="details-title">Event Details</div>
              </div>
            </div>

              <div className="event-details-right">
                <section className="focus-section">
                  <div className="section-badge">CONFERENCE THEMES</div>
                  <h2>Focus Areas</h2>

                  <div className="focus-grid">
                    {focusAreas.map((p) => {
                      const Icon = p.icon;
                      return (
                        <div key={p.key} className="focus-card">
                          <div className="focus-icon" aria-hidden="true">
                            <Icon size={34} strokeWidth={2.25} />
                          </div>

                          <div className="focus-card-title">{p.title}</div>
                          <div className="focus-card-desc">{p.desc}</div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              </div>
          </div>
        </div>
      </section>

      {/* FEATURED SPEAKERS */}
      <div className="sp-home-speakersWrap">
        {/* Recreated to match the attached design */}
        <Speakers
          featured={speakers.slice(0, 3)}
          onViewProfile={(speaker) => (window.location.href = `/speaker/${speaker?.id}`)}
        />
      </div>


      {/* SPEAKERS + SCHEDULE PREVIEW */}
      <section className="section">
        <div className="container">
          <div className="schedule-preview-under">
            <h2 className="section-title">Schedule Preview</h2>

            <div className="schedule-list">
              {schedulePreview.map((item) => (
                <div key={item.id} className="schedule-item">
                  <div className="schedule-time">{item.time}</div>
                  <div className="schedule-main">
                    <div className="schedule-title">{item.title}</div>
                    <div className="schedule-sub">
                      <span className="track-pill">{item.type}</span>
                      {item.speakerName ? (
                        <span className="muted">· {item.speakerName}</span>
                      ) : (
                        <span className="muted">· {item.location}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="view-schedule-row">
              <a href="/workshops" className="btn btn-primary">
                View Schedule
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="join">


      </section>


      <Footer />
    </div>
  );
}

export default Home;


