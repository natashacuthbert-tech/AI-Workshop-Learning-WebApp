import "./App.css";

function App() {
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
    </div>
  );
}

export default App;