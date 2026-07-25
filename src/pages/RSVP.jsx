import React from "react";
import backgroundWallpaper from "../assets/background-wallpaper.png";
import "./RSVP.css";

export default function RSVP() {
  return (
    <div className="rsvp">
      <div
        className="page-bg"
        style={{ backgroundImage: `url(${backgroundWallpaper})` }}
        aria-hidden="true"
      />
      <div className="rsvp-content">
        <h2 className="rsvp-title">RSVP</h2>
        <div className="rsvp-coming-soon">
          <p className="rsvp-message">
            RSVPs and cabin reservations will go live closer to our wedding
            date!
          </p>
          <p className="rsvp-submessage">Check back soon.</p>
        </div>
      </div>
    </div>
  );
}
