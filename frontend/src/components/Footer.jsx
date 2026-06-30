import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Globe, MapPin, Mail, Send, MessageSquareText } from "lucide-react";





import jhubLogo from "../assets/jhublogo.png";
import jkuatLogo from "../assets/jkuatlogo.png";

export default function Footer() {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className={`bb-footer ${visible ? "bb-footer--in" : ""}`}>
      <div className="bb-footer-glow" aria-hidden="true" />

      <div className="bb-footer-inner">
        <div className="bb-footer-grid">
          {/* Column 1 - Brand */}
          <div className="bb-footer-col">
            <div className="bb-footer-logo-container" aria-hidden="true">
              <img className="bb-footer-brandLogo" src={jhubLogo} alt="JHUB Africa" />
              <img className="bb-footer-brandLogoSmall" src={jkuatLogo} alt="JKUAT" />
            </div>


            <p className="bb-footer-brandDesc">
              Advancing AI research and innovation building systems that empower Africa’s next
              generation of researchers and innovators.
            </p>

            <div className="bb-powered-badge" aria-label="Powered by JKUAT and JHUB Africa">
              Powered by JKUAT &amp; JHUB Africa
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div className="bb-footer-col">
            <div className="bb-footer-colTitle">Navigation</div>
            <nav className="bb-footer-nav" aria-label="Footer navigation">
              <Link className="bb-footer-navLink" to="/">
                Home
              </Link>
              <Link className="bb-footer-navLink" to="/speakers">
                Speakers
              </Link>
              <Link className="bb-footer-navLink" to="/schedule">
                Schedule
              </Link>
              <Link className="bb-footer-navLink" to="/register">
                Register
              </Link>
              <Link className="bb-footer-navLink" to="/blog">
                Blog
              </Link>
            </nav>
          </div>

          {/* Column 3 - Contact */}
          <div className="bb-footer-col">
            <div className="bb-footer-colTitle">Contact</div>
            <div className="bb-footer-contactList">
              <a className="bb-footer-contactItem" href="mailto:info@jhubafrica.co.ke">
                <Mail size={18} />
                <span>info@jhubafrica.co.ke</span>
              </a>

              <a className="bb-footer-contactItem" href="https://jhubafrica.com" target="_blank" rel="noreferrer">
                <Globe size={18} />
                <span>jhubafrica.com</span>
              </a>

              <a className="bb-footer-contactItem" href="#" onClick={(e) => e.preventDefault()}>
                <MapPin size={18} />
                <span>Venue ,AICAD</span>
              </a>
            </div>
          </div>

          {/* Column 4 - Stay Connected */}
          <div className="bb-footer-col">
            <div className="bb-footer-colTitle">Follow Us</div>

            <div className="bb-footer-socialRow" aria-label="Social media">
              <a className="bb-socialGlass" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <MessageSquareText size={18} />
              </a>
              <a className="bb-socialGlass" href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
                <Send size={18} />
              </a>

              <a className="bb-socialGlass" href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <MessageSquareText size={18} />
              </a>
              <a className="bb-socialGlass" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Send size={18} />
              </a>

            </div>


          </div>
        </div>

        <div className="bb-footer-divider" aria-hidden="true" />

        <div className="bb-footer-bottom">
          <div className="bb-footer-bottomLeft">
            © 2026 JHUB Africa &amp; JKUAT. All Rights Reserved.
          </div>
          <div className="bb-footer-bottomRight" aria-label="Legal links">
            <div className="bb-footer-bottomRightTop">AI Research Workshop 2026</div>
            <div className="bb-footer-legalLinks">
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}








