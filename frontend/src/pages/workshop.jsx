import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import api from "../services/api";

function Workshops() {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    const loadWorkshops = async () => {
      try {
        const response = await api.get("/workshops/");
        console.log("Workshops response:", response.data);
        setWorkshops(response.data);
      } catch (error) {
        console.error("Error fetching workshops:", error);
      }
    };

    loadWorkshops();
  }, []);

  return (
    <div>
      <Navbar />

      <section className="page-section">
        <h1>Workshops</h1>
        <p>Browse upcoming AI workshops and learning sessions.</p>

        {workshops.length === 0 ? (
          <p>No workshops available yet.</p>
        ) : (
          <div className="cards-grid">
            {workshops.map((workshop) => (
              <div className="info-card" key={workshop.id}>
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

export default Workshops;