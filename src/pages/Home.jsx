import React from "react";
import heroImage from "../assets/hero.jpeg";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home-hero">
        <img
          src={heroImage}
          alt="Hannah and Nadav"
          className="home-hero-image"
        />
      </div>
      <div className="home-welcome">
        <p className="home-welcome-text">
          We're so excited to celebrate our wedding weekend with the people we
          love most. Join us for a weekend of festivities at Camp Lindenmere in
          the beautiful Pocono Mountains.
        </p>
      </div>
    </div>
  );
}
