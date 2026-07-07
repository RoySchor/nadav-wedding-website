import React from "react";
import borderImage from "../assets/border.png";
import "./BorderFrame.css";

export default function BorderFrame({ children }) {
  const borderStyle = {
    backgroundImage: `url(${borderImage})`,
  };

  return (
    <div className="border-frame">
      <div className="border-left" style={borderStyle} aria-hidden="true" />
      <div className="border-right" style={borderStyle} aria-hidden="true" />
      <main className="border-content">{children}</main>
    </div>
  );
}
