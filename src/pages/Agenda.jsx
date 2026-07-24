import React from "react";
import { Link } from "react-router-dom";
import backgroundWallpaper from "../assets/background-wallpaper.png";
import "./Agenda.css";

const CAMP_LINK =
  "https://camplindenmereevents.com/assets/uploads/gallery/Website_Homepage_Final.mp4";

const BAND_INSTAGRAM = "https://www.instagram.com/wwjd_band/?hl=en";

/* ===== SCHEDULE DATA ===== */

const DAYS = [
  {
    title: "Friday, June 11th",
    blocks: [
      {
        label: "Arrival",
        events: [
          {
            time: "12:00 PM – 6:00 PM",
            desc: "Arrive at Camp Lindenmere and check into cabins",
          },
        ],
      },
      {
        label: "Welcome Party",
        events: [
          {
            time: "6:00 PM",
            desc: (
              <>
                Cook out and cocktails with live music by
                <br />
                <em>What Would Jerry Do</em>
              </>
            ),
            instagram: BAND_INSTAGRAM,
          },
        ],
        attire:
          "Campground Formal (whatever that means to you, flat shoes or block heels, are recommended as part of the event will be on grass)",
      },
    ],
  },
  {
    title: "Saturday, June 12th",
    subtitle: "Wedding Day",
    blocks: [
      {
        label: "Morning & Afternoon",
        events: [
          {
            time: "10:00 AM – 11:30 AM",
            desc: "Brunch",
            note: "(Continental breakfast also available starting at 9:00 AM)",
          },
          {
            time: "11:30 AM – 3:30 PM",
            desc: "Enjoy the day swimming or hanging by the lake, joining a pickleball tournament, exploring walking trails, and other outdoor activities across 200+ acres of the camp.",
            note: (
              <>
                See <Link to="/faq">FAQs</Link> for recommended packing list
              </>
            ),
          },
        ],
      },
      {
        label: "Evening Events",
        events: [
          { time: "4:30 PM – 5:30 PM", desc: "Pre-ceremony cocktail hour" },
          { time: "5:30 PM – 6:00 PM", desc: "Ceremony" },
          { time: "6:00 PM – 7:00 PM", desc: "Post-ceremony cocktail hour" },
          { time: "7:00 PM – 11:00 PM", desc: "Reception" },
          { time: "11:00 PM – 1:00 AM", desc: "After party and campfire" },
        ],
        attire:
          "Cocktail (flat shoes or short block heels recommended as wedding day will include events all over camp)",
      },
    ],
  },
  {
    title: "Sunday, June 13th",
    blocks: [
      {
        label: "Farewell",
        events: [
          {
            time: "10:00 AM – 11:30 AM",
            desc: "Farewell Brunch",
            note: "(Continental breakfast also available starting at 9:00 AM)",
          },
        ],
      },
    ],
  },
];

/* ===== COMPONENTS ===== */

function InstagramIcon() {
  return (
    <svg
      className="ig-icon"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.2c3.2 0 3.6.01 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.37 1.06.42 2.23.06 1.25.07 1.62.07 4.8s-.01 3.55-.07 4.8c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.06.37-2.23.42-1.25.06-1.62.07-4.85.07s-3.6-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.42a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.17-.42-.37-1.06-.42-2.23-.06-1.25-.07-1.62-.07-4.8s.01-3.55.07-4.8c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.37 2.23-.42C8.4 2.21 8.77 2.2 12 2.2zm0 1.8c-3.17 0-3.5.01-4.74.07-.9.04-1.38.19-1.7.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.32-.28.8-.32 1.7-.06 1.24-.07 1.57-.07 4.66s.01 3.42.07 4.66c.04.9.19 1.38.32 1.7.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.13.8.28 1.7.32 1.24.06 1.57.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.38-.19 1.7-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.32.28-.8.32-1.7.06-1.24.07-1.57.07-4.66s-.01-3.42-.07-4.66c-.04-.9-.19-1.38-.32-1.7a2.86 2.86 0 0 0-.69-1.06 2.86 2.86 0 0 0-1.06-.69c-.32-.13-.8-.28-1.7-.32C15.5 4.01 15.17 4 12 4zm0 3.07A4.93 4.93 0 1 0 12 16.93 4.93 4.93 0 0 0 12 7.07zm0 8.13A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4zm6.28-8.33a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z" />
    </svg>
  );
}

function CardEventList({ events }) {
  return (
    <ul className="agenda-card-list">
      {events.map((event, i) => (
        <li key={i}>
          <span className="agenda-card-time">{event.time}</span>
          <span className="agenda-card-desc">{event.desc}</span>
          {event.instagram && (
            <a
              className="agenda-card-social"
              href={event.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
              @wwjd_band
            </a>
          )}
          {event.note && <span className="agenda-card-note">{event.note}</span>}
        </li>
      ))}
    </ul>
  );
}

/* ===== MAIN PAGE ===== */

export default function Agenda() {
  return (
    <div className="agenda">
      <div
        className="page-bg"
        style={{ backgroundImage: `url(${backgroundWallpaper})` }}
        aria-hidden="true"
      />
      <div className="agenda-content">
        <h2 className="agenda-title">Weekend Agenda</h2>
        <p className="agenda-intro">
          All wedding weekend events will take place at{" "}
          <a href={CAMP_LINK} target="_blank" rel="noopener noreferrer">
            Camp Lindenmere
          </a>
          .
        </p>

        <div className="agenda-cards-view">
          {DAYS.map((day) => (
            <div key={day.title} className="agenda-card">
              <h3 className="agenda-card-title">
                {day.title}
                {day.subtitle && (
                  <span className="agenda-card-subtitle">{day.subtitle}</span>
                )}
              </h3>

              <div className="agenda-blocks">
                {day.blocks.map((block) => (
                  <div key={block.label} className="agenda-block">
                    <h4 className="agenda-block-label">{block.label}</h4>
                    <CardEventList events={block.events} />
                    {block.attire && (
                      <p className="agenda-card-attire">
                        <strong>Attire:</strong> {block.attire}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
