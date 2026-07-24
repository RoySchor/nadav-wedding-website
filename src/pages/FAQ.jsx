import React from "react";
import backgroundWallpaper from "../assets/background-wallpaper.png";
import "./FAQ.css";

const FAQS = [
  {
    question: "How do meals and snacks work throughout the weekend?",
    answer:
      "All meals and snacks will be provided throughout wedding weekend. Your RSVP ensures we have the proper headcount for each meal and event!",
  },
  {
    question: "Anything special I should pack for the wedding weekend at camp?",
    answer: null,
    list: [
      "Swimsuit, sunscreen, and beach towel for time at the lake.",
      "Comfortable clothing and shoes for hanging around camp — we will be spending a lot of time outside so check the weather and pack accordingly!",
      "Slippers or sandals (some cabins may require a walk across the hall to your bathroom)",
      "Welcome Party & Reception Wear",
      "Bedding and towels are provided with your stay but feel free to bring additional pillows, blankets etc — whatever will make you most comfortable!",
    ],
    note: "Please note, no outside alcohol is permitted at Camp.",
  },
  {
    question: "Are children invited?",
    answer:
      "We love your little ones! However, because of our venue's logistics and limitations, we can only host a limited number of children. If your kids are invited, their names will be listed directly on your official invitation and RSVP page.",
  },
];

export default function FAQ() {
  return (
    <div className="faq">
      <div
        className="page-bg"
        style={{ backgroundImage: `url(${backgroundWallpaper})` }}
        aria-hidden="true"
      />
      <div className="faq-content">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <div className="faq-list">
          {FAQS.map((item, idx) => (
            <div key={idx} className="faq-card">
              <h3 className="faq-question">{item.question}</h3>
              {item.answer && <p className="faq-answer">{item.answer}</p>}
              {item.list && (
                <ul className="faq-answer-list">
                  {item.list.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              )}
              {item.note && <p className="faq-answer-note">{item.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
