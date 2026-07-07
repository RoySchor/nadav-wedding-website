import React from "react";
import "./RSVP.css";

export default function RSVP() {
  return (
    <div className="rsvp">
      <h2 className="rsvp-title">RSVP</h2>
      <div className="rsvp-coming-soon">
        <p className="rsvp-message">
          RSVPs and cabin reservations will go live closer to our wedding date!
        </p>
        <p className="rsvp-submessage">Check back soon.</p>
      </div>
    </div>
  );
}
