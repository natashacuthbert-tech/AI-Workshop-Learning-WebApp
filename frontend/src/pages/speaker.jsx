import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import api from "../services/api";

function Speakers() {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    const loadSpeakers = async () => {
      try {
        const response = await api.get("/speakers/");
        setSpeakers(response.data.speakers);
      } catch (error) {
        console.error("Error fetching speakers:", error);
      }
    };

    loadSpeakers();
  }, []);

  return (
    <div>
      <Navbar />

      <section className="page-section">
        <h1>Speakers</h1>
        <p>Meet our AI experts and workshop presenters.</p>

        {speakers.length === 0 ? (
          <p>No speakers available yet.</p>
        ) : (
          <div className="cards-grid">
            {speakers.map((speaker) => (
              <div className="info-card" key={speaker.id}>
                <h3>{speaker.name}</h3>
                <p>
                  <strong>Title:</strong> {speaker.title}
                </p>
                <p>{speaker.bio}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Speakers;