import { useEffect, useState } from "react";
import api from "./services/api";
import "./App.css";

function App() {
  const [workshops, setWorkshops] = useState([]);

  const fetchWorkshops = async () => {
    try {
      const response = await api.get("/workshops/");
      setWorkshops(response.data);
    } catch (error) {
      console.error("Error fetching workshops:", error);
    }
  };

  useEffect(() => {
  const loadWorkshops = async () => {
    await fetchWorkshops();
  };

  loadWorkshops();
}, []);

  return (
    <div className="app">
      <nav className="navbar">
        <h2>AI Workshop Learning WebApp</h2>

        <div>
          <a href="#">Home</a>
          <a href="#">Workshops</a>
          <a href="#">Speakers</a>
          <a href="#">Blog</a>
          <a href="#">Login</a>
        </div>
      </nav>

      <section className="hero">
        <h1>AI Research Workshop 2026</h1>
        <p>
          Learn artificial intelligence through workshops, expert sessions,
          speakers, and practical learning resources.
        </p>
        <button>Explore Workshops</button>
      </section>

      <section className="workshops-section">
        <h2>Available Workshops</h2>

        {workshops.length === 0 ? (
          <p>No workshops available.</p>
        ) : (
          <div className="workshops-grid">
            {workshops.map((workshop) => (
              <div key={workshop.id} className="workshop-card">
                <h3>{workshop.title}</h3>
                <p>{workshop.description}</p>
                <p>
                  <strong>Date:</strong> {workshop.date}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;