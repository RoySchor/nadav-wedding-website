import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Travel from "./pages/Travel";
import FAQ from "./pages/FAQ";
import RSVP from "./pages/RSVP";
import "./App.css";

// Reset scroll to the top on every route change so navigating to a new
// page always lands at the top, not wherever the previous page was scrolled.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/travel"
          element={
            <main className="page-fullbleed">
              <Travel />
            </main>
          }
        />
        <Route
          path="/"
          element={
            <main className="page-fullbleed">
              <Home />
            </main>
          }
        />
        <Route
          path="/agenda"
          element={
            <main className="page-fullbleed">
              <Agenda />
            </main>
          }
        />
        <Route
          path="/faq"
          element={
            <main className="page-fullbleed">
              <FAQ />
            </main>
          }
        />
        <Route
          path="/rsvp"
          element={
            <main className="page-fullbleed">
              <RSVP />
            </main>
          }
        />
      </Routes>
    </div>
  );
}
