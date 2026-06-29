import { Link, useLocation } from "react-router-dom";

import jhubLogo from "../assets/jhublogo.png";
import jkuatLogo from "../assets/jkuatlogo.png";

function Navbar() {
  const location = useLocation();

  const activePath = location.pathname;

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/speakers", label: "Speakers" },
    { to: "/workshops", label: "Schedule" },
    { to: "/blog", label: "Blog" },
    { to: "/gallery", label: "Gallery" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-left" aria-label="Workshop navigation">
        <div className="logo-container" aria-label="Institution logos">
          <img className="logo-image" src={jkuatLogo} alt="JKUAT" />
          <img className="logo-image" src={jhubLogo} alt="JHUB Africa" />
        </div>
      </div>

      <div className="nav-center" role="navigation" aria-label="Primary">
        {navItems.map((item) => {
          const isActive = item.to === activePath;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={isActive ? "nav-link nav-link-active" : "nav-link"}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      <div className="nav-right" aria-label="Actions">
        <Link to="/register" className="register-btn">
          Register Now
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;









