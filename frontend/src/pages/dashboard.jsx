import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import api from "../services/api";

function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const response = await api.get("/dashboard/stats");
        setStats(response.data);
      } catch (error) {
        console.error("Dashboard error:", error);
      }
    };

    loadStats();
  }, []);

  return (
    <div>
      <Navbar />

      <section className="page-section">
        <h1>Dashboard</h1>
        <p>Overview of the AI Workshop Learning Platform.</p>

        {!stats ? (
          <p>Loading dashboard...</p>
        ) : (
          <div className="cards-grid">
            <div className="info-card">
              <h3>Users</h3>
              <p>{stats.total_users}</p>
            </div>

            <div className="info-card">
              <h3>Workshops</h3>
              <p>{stats.total_workshops}</p>
            </div>

            <div className="info-card">
              <h3>Registrations</h3>
              <p>{stats.total_registrations}</p>
            </div>

            <div className="info-card">
              <h3>Speakers</h3>
              <p>{stats.total_speakers}</p>
            </div>

            <div className="info-card">
              <h3>Blogs</h3>
              <p>{stats.total_blogs}</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Dashboard;