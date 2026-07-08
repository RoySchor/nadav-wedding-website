import React, { useState } from "react";
import "./Agenda.css";

const CAMP_LINK =
  "https://www.google.com/maps/place/Camp+Lindenmere/@41.0567025,-75.3011083,496m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89c3aadd07890225:0x93cb708576ae94e1!8m2!3d41.0567025!4d-75.2985334!16s%2Fg%2F1hc1bmnz6";

/* ===== TIMELINE DATA ===== */

const DAYS_TIMELINE = [
  {
    title: "Friday, June 11th",
    events: [
      {
        time: "12:00 PM – 6:00 PM",
        desc: "Arrive at Camp Lindenmere and check into cabin",
      },
      {
        time: "6:00 PM",
        desc: (
          <>
            <strong>Welcome Party</strong> — Cook out and cocktails with live
            music by <em>What Would Jerry Do</em>
          </>
        ),
      },
    ],
    attire:
      "Campground Formal (whatever that means to you, flat shoes recommended as part of the event will be on grass)",
  },
  {
    title: "Saturday, June 12th — Wedding Day",
    events: [
      {
        time: "10:00 AM – 11:30 AM",
        desc: "Brunch with Bloody Mary & Mimosa bar",
        note: "(Continental breakfast also available starting at 9:00 AM)",
      },
      {
        time: "11:30 AM – 3:30 PM",
        desc: "Enjoy the day — swimming or hanging by the lake, pickleball tournament, walking trails, and other outdoor activities across 200+ acres of camp",
      },
      {
        time: "4:30 PM – 5:30 PM",
        desc: "Pre-ceremony cocktail hour",
      },
    ],
    attire:
      "Cocktail (flat shoes or short block heels recommended as events will be all over camp)",
    attireIndented: true,
    postAttireEvents: [
      {
        time: "5:30 PM – 6:00 PM",
        desc: <strong>Ceremony</strong>,
      },
      { time: "6:00 PM – 7:00 PM", desc: "Post-ceremony cocktail hour" },
      {
        time: "7:00 PM – 11:00 PM",
        desc: <strong>Reception</strong>,
      },
      { time: "11:00 PM – 1:00 AM", desc: "After party and campfire" },
    ],
  },
  {
    title: "Sunday, June 13th",
    events: [
      {
        time: "10:00 AM – 11:30 AM",
        desc: "Farewell Brunch",
        note: "(Continental breakfast also available starting at 9:00 AM)",
      },
    ],
  },
];

/* ===== CARDS DATA (with blocks) ===== */

const DAYS_CARDS = [
  {
    title: "Friday, June 11th",
    blocks: [
      {
        label: "Arrival",
        events: [
          {
            time: "12:00 PM – 6:00 PM",
            desc: "Arrive at Camp Lindenmere and check into cabin",
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
                <strong>Welcome Party</strong> — Cook out and cocktails with live
                music by <em>What Would Jerry Do</em>
              </>
            ),
          },
        ],
        attire:
          "Campground Formal (whatever that means to you, flat shoes recommended as part of the event will be on grass)",
      },
    ],
  },
  {
    title: "Saturday, June 12th — Wedding Day",
    blocks: [
      {
        label: "Morning & Afternoon",
        events: [
          {
            time: "10:00 AM – 11:30 AM",
            desc: "Brunch with Bloody Mary & Mimosa bar",
            note: "(Continental breakfast also available starting at 9:00 AM)",
          },
          {
            time: "11:30 AM – 3:30 PM",
            desc: "Enjoy the day — swimming or hanging by the lake, pickleball tournament, walking trails, and other outdoor activities across 200+ acres of camp",
          },
        ],
      },
      {
        label: "Evening Events",
        events: [
          { time: "4:30 PM – 5:30 PM", desc: "Pre-ceremony cocktail hour" },
          {
            time: "5:30 PM – 6:00 PM",
            desc: <strong>Ceremony</strong>,
          },
          { time: "6:00 PM – 7:00 PM", desc: "Post-ceremony cocktail hour" },
          {
            time: "7:00 PM – 11:00 PM",
            desc: <strong>Reception</strong>,
          },
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

/* ===== SHARED COMPONENTS ===== */

function EventList({ events }) {
  return (
    <ul className="agenda-events">
      {events.map((event, i) => (
        <li key={i} className="agenda-event">
          <span className="event-time">{event.time}</span>
          <span className="event-desc">{event.desc}</span>
          {event.note && <span className="event-note">{event.note}</span>}
        </li>
      ))}
    </ul>
  );
}

/* ===== TIMELINE VIEW ===== */

function ListView() {
  return (
    <div className="agenda-list-view">
      {DAYS_TIMELINE.map((day) => (
        <section key={day.title} className="agenda-day">
          <h3 className="agenda-day-title">{day.title}</h3>
          <EventList events={day.events} />
          {day.attire && (
            <p
              className={`agenda-attire ${day.attireIndented ? "agenda-attire--indented" : ""}`}
            >
              <strong>Attire:</strong> {day.attire}
            </p>
          )}
          {day.postAttireEvents && <EventList events={day.postAttireEvents} />}
        </section>
      ))}
    </div>
  );
}

/* ===== CARDS VIEW ===== */

function CardEventList({ events }) {
  return (
    <ul className="agenda-card-list">
      {events.map((event, i) => (
        <li key={i}>
          <span className="agenda-card-time">{event.time}</span>
          <span className="agenda-card-desc">{event.desc}</span>
          {event.note && (
            <span className="agenda-card-note">{event.note}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

function CardsView() {
  return (
    <div className="agenda-cards-view">
      {DAYS_CARDS.map((day) => (
        <div key={day.title} className="agenda-card">
          <h3 className="agenda-card-title">{day.title}</h3>

          {day.blocks ? (
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
          ) : (
            <>
              <CardEventList events={day.events} />
              {day.attire && (
                <p className="agenda-card-attire">
                  <strong>Attire:</strong> {day.attire}
                </p>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

/* ===== MAIN PAGE ===== */

export default function Agenda() {
  const [view, setView] = useState("list");

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

      <div className="agenda-tabs">
        <button
          className={`agenda-tab ${view === "list" ? "agenda-tab--active" : ""}`}
          onClick={() => setView("list")}
        >
          Timeline
        </button>
        <button
          className={`agenda-tab ${view === "cards" ? "agenda-tab--active" : ""}`}
          onClick={() => setView("cards")}
        >
          Cards
        </button>
      </div>

      {view === "list" ? <ListView /> : <CardsView />}
    </div>
  );
}
