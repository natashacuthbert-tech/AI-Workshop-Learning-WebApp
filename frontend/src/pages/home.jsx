import Navbar from "../components/navbar";

function Home() {
  return (
    <div>
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <p className="tag">AI Learning Workshop</p>

          <h1>Learn AI Through Practical Workshops</h1>

          <p>
            Join expert-led sessions, explore AI concepts, register for
            workshops, and access learning resources in one platform.
          </p>

          <div className="hero-buttons">
            <a href="/workshops" className="btn-primary">
              Explore Workshops
            </a>

            <a href="/register" className="btn-secondary">
              Create Account
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;