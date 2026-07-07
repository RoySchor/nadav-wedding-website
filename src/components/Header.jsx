import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/agenda", label: "Weekend Agenda" },
  { to: "/travel", label: "Travel & Lodging" },
  { to: "/faq", label: "FAQs" },
  { to: "/rsvp", label: "RSVP" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-top">
        <h1 className="header-names">Hannah & Nadav</h1>
        <p className="header-details">
          June 11–13, 2027 • Camp Lindenmere, Poconos, PA
        </p>
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
