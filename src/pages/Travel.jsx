import React from "react";
import backgroundWallpaper from "../assets/background-wallpaper.png";
import "./Travel.css";

const CAMP_MAPS_LINK =
  "https://www.google.com/maps/place/Camp+Lindenmere/@41.0567025,-75.2985334,760m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89c3aadd07890225:0x93cb708576ae94e1!8m2!3d41.0567025!4d-75.2985334!16s%2Fg%2F1hc1bmnz6?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D";

const BUS_LINK =
  "https://trailways.com/schedules/bus-from-new-york-ny-to-mount-pocono-pa/";

export default function Travel() {
  return (
    <div className="travel">
      <div
        className="page-bg"
        style={{ backgroundImage: `url(${backgroundWallpaper})` }}
        aria-hidden="true"
      />
      <div className="travel-content">
        <h2 className="travel-title">Travel & Lodging</h2>

        <p className="travel-intro">
          All weekend events will take place at Camp Lindenmere and everyone is
          invited to stay on site!
        </p>

        <div className="travel-card">
          <h3 className="travel-card-title">Getting to Camp Lindenmere</h3>
          <p>We can't wait to celebrate with you in the Poconos!</p>
          <p>
            Camp Lindenmere is located at{" "}
            <a href={CAMP_MAPS_LINK} target="_blank" rel="noopener noreferrer">
              <strong>500 Lindenmere Ln, Henryville, PA 18332</strong>
            </a>
            .
          </p>
          <ul className="travel-card-list">
            <li>Onsite parking is available for all guests.</li>
            <li>
              If you are traveling from NYC and prefer to skip the drive, there
              is a direct bus from Manhattan. The{" "}
              <a href={BUS_LINK} target="_blank" rel="noopener noreferrer">
                Martz Trailways
              </a>{" "}
              bus from Port Authority runs straight to the Mt. Pocono station a
              few times per day.
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
            cabin or private room for one or two nights of wedding weekend.
          </p>
          <p className="travel-card-note">
            RSVPs and cabin reservations will go live closer to our wedding date!
          </p>
        </div>
      </div>
    </div>
  );
}
