import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">AI Workshop</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/workshops">Workshops</Link>
        <Link to="/speakers">Speakers</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;