import React from "react";
import "./Agenda.css";

const CAMP_LINK =
  "https://www.google.com/maps/place/Camp+Lindenmere/@41.0567025,-75.3011083,496m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89c3aadd07890225:0x93cb708576ae94e1!8m2!3d41.0567025!4d-75.2985334!16s%2Fg%2F1hc1bmnz6";

export default function Agenda() {
  return (
    <div className="agenda">
      <h2 className="agenda-title">Weekend Agenda</h2>
      <p className="agenda-intro">
        All wedding weekend events will take place at{" "}
        <a href={CAMP_LINK} target="_blank" rel="noopener noreferrer">
          Camp Lindenmere
        </a>
        .
      </p>

      {/* Friday */}
      <section className="agenda-day">
        <h3 className="agenda-day-title">Friday, June 11th</h3>
        <ul className="agenda-events">
          <li className="agenda-event">
            <span className="event-time">12:00 PM – 6:00 PM</span>
            <span className="event-desc">
              Arrive at Camp Lindenmere and check into cabin
            </span>
          </li>
          <li className="agenda-event">
            <span className="event-time">6:00 PM</span>
            <span className="event-desc">
              <strong>Welcome Party</strong> — Cook out and cocktails with live
              music by <em>What Would Jerry Do</em>
            </span>
          </li>
        </ul>
        <p className="agenda-attire">
          <strong>Attire:</strong> Campground Formal (whatever that means to
          you, flat shoes recommended as part of the event will be on grass)
        </p>
      </section>

      {/* Saturday */}
      <section className="agenda-day">
        <h3 className="agenda-day-title">Saturday, June 12th — Wedding Day</h3>
        <ul className="agenda-events">
          <li className="agenda-event">
            <span className="event-time">10:00 AM – 11:30 AM</span>
            <span className="event-desc">
              Brunch with Bloody Mary & Mimosa bar
            </span>
            <span className="event-note">
              (Continental breakfast also available starting at 9:00 AM)
            </span>
          </li>
          <li className="agenda-event">
            <span className="event-time">11:30 AM – 3:30 PM</span>
            <span className="event-desc">
              Enjoy the day — swimming or hanging by the lake, pickleball
              tournament, walking trails, and other outdoor activities across
              200+ acres of camp
            </span>
          </li>
          <li className="agenda-event">
            <span className="event-time">4:30 PM – 5:30 PM</span>
            <span className="event-desc">Pre-ceremony cocktail hour</span>
          </li>
          <li className="agenda-event">
            <span className="event-time">5:30 PM – 6:00 PM</span>
            <span className="event-desc">
              <strong>Ceremony</strong>
            </span>
          </li>
          <li className="agenda-event">
            <span className="event-time">6:00 PM – 7:00 PM</span>
            <span className="event-desc">Post-ceremony cocktail hour</span>
          </li>
          <li className="agenda-event">
            <span className="event-time">7:00 PM – 11:00 PM</span>
            <span className="event-desc">
              <strong>Reception</strong>
            </span>
          </li>
          <li className="agenda-event">
            <span className="event-time">11:00 PM – 1:00 AM</span>
            <span className="event-desc">After party and campfire</span>
          </li>
        </ul>
        <p className="agenda-attire">
          <strong>Attire:</strong> Cocktail (flat shoes or short block heels
          recommended as wedding day will include events all over camp)
        </p>
      </section>

      {/* Sunday */}
      <section className="agenda-day">
        <h3 className="agenda-day-title">Sunday, June 13th</h3>
        <ul className="agenda-events">
          <li className="agenda-event">
            <span className="event-time">10:00 AM – 11:30 AM</span>
            <span className="event-desc">Farewell Brunch</span>
            <span className="event-note">
              (Continental breakfast also available starting at 9:00 AM)
            </span>
          </li>
          <li className="agenda-event">
            <span className="event-time">After brunch</span>
            <span className="event-desc">Check out & Departure</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
