import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import BorderFrame from "./components/BorderFrame";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Travel from "./pages/Travel";
import FAQ from "./pages/FAQ";
import RSVP from "./pages/RSVP";
import "./App.css";

export default function App() {
  return (
    <div className="app">
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
            <BorderFrame>
              <Home />
            </BorderFrame>
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
            <BorderFrame>
              <FAQ />
            </BorderFrame>
          }
        />
        <Route
          path="/rsvp"
          element={
            <BorderFrame>
              <RSVP />
            </BorderFrame>
          }
        />
      </Routes>
    </div>
  );
}
