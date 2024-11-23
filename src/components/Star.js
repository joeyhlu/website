// Star.js
import React from "react";
import "./Star.css";

function Star({ left, delay, duration }) {
  return (
    <div
      className="star"
      style={{
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    ></div>
  );
}

export default Star;
