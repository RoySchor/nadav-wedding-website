import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/agenda", label: "Weekend Agenda" },
  { to: "/travel", label: "Travel & Lodging" },
  { to: "/faq", label: "FAQs" },
  { to: "/rsvp", label: "RSVP" },
];

function useCountdown(targetDate) {
  const [daysLeft, setDaysLeft] = useState(() => {
    const now = new Date();
    const target = new Date(targetDate);
    return Math.ceil((target - now) / (1000 * 60 * 60 * 24));
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const target = new Date(targetDate);
      setDaysLeft(Math.ceil((target - now) / (1000 * 60 * 60 * 24)));
    }, 60000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return daysLeft;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const headerRef = React.useRef(null);
  const daysLeft = useCountdown("2027-06-11T00:00:00");

  useEffect(() => {
    let ticking = false;

    // Only show the header near the top of the page; hide it once scrolled
    // past the header's own height. Snapping in/out with a CSS transition
    // (rather than following the scroll position pixel by pixel) avoids
    // fighting the mobile browser's URL-bar show/hide, which fires tiny
    // scroll deltas and made the header feel jumpy.
    const update = () => {
      ticking = false;
      const currentScrollY = window.scrollY;
      const headerHeight = headerRef.current
        ? headerRef.current.offsetHeight
        : 200;

      setHidden(currentScrollY > headerHeight);
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`header ${hidden ? "header-hidden" : ""}`}
    >
      <div className="header-top">
        <h1 className="header-names">Hannah & Nadav</h1>
        <p className="header-details">
          June 11–13, 2027 • Camp Lindenmere, Poconos, PA
        </p>
        {daysLeft > 0 && (
          <p className="header-countdown">
            {daysLeft} days to go
          </p>
        )}
      </div>

      <nav className="header-nav">
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className={`hamburger ${menuOpen ? "open" : ""}`} />
        </button>

        <ul className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={() => setMenuOpen(false)}
                end={to === "/"}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
