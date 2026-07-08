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
  const [offset, setOffset] = useState(0);
  const headerRef = React.useRef(null);
  const daysLeft = useCountdown("2027-06-11T00:00:00");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      const headerHeight = headerRef.current
        ? headerRef.current.offsetHeight
        : 200;

      // Only reveal when scrolled back near the top
      if (delta < 0 && currentScrollY > headerHeight) {
        // Scrolling up but not near top — keep hidden
        lastScrollY = currentScrollY;
        return;
      }

      setOffset((prev) => {
        const next = Math.min(Math.max(prev + delta, 0), headerHeight);
        return next;
      });

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="header"
      style={{ transform: `translateY(-${offset}px)` }}
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
