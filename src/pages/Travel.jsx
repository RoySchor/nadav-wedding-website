import React from "react";
import backgroundWallpaper from "../assets/background-wallpaper.png";
import "./Travel.css";

const CAMP_LINK =
  "https://www.google.com/maps/place/Camp+Lindenmere/@41.0567025,-75.3011083,496m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89c3aadd07890225:0x93cb708576ae94e1!8m2!3d41.0567025!4d-75.2985334!16s%2Fg%2F1hc1bmnz6";

export default function Travel() {
  return (
    <div
      className="travel"
      style={{ backgroundImage: `url(${backgroundWallpaper})` }}
    >
      <div className="travel-content">
        <h2 className="travel-title">Travel & Lodging</h2>

        <p className="travel-intro">
          All weekend events will take place at{" "}
          <a href={CAMP_LINK} target="_blank" rel="noopener noreferrer">
            Camp Lindenmere
          </a>{" "}
          and everyone is invited to stay on site!
        </p>

        <div className="travel-card">
          <h3 className="travel-card-title">Getting to Camp Lindenmere</h3>
          <p>
            We can't wait to celebrate with you in the Poconos!{" "}
            <a href={CAMP_LINK} target="_blank" rel="noopener noreferrer">
              Camp Lindenmere
            </a>{" "}
            is located at{" "}
            <strong>500 Lindenmere Ln, Henryville, PA 18332</strong>.
          </p>
          <ul className="travel-card-list">
            <li>Parking onsite is available for all guests.</li>
            <li>
              If you are traveling from NYC and prefer to skip the drive, there
              is a direct bus from Manhattan. The{" "}
              Martz Trailways bus from Port Authority runs
              straight to the Mt. Pocono station a few times per day.
            </li>
          </ul>
        </div>

        <div className="travel-card">
          <h3 className="travel-card-title">Lodging</h3>
          <p>
            Camp Lindenmere offers a variety of fully renovated lodging options
            with central air conditioning and modern bathrooms.
          </p>
          <p>
            When RSVPing through the site, you will be directed to book your
            cabin or private room for either one or two nights of wedding
            weekend.
          </p>
          <p className="travel-card-note">
            RSVPs and cabin reservations will go live closer to our wedding date!
          </p>
        </div>
      </div>
    </div>
  );
}
