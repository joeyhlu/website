// RotatingCard.js
import React, { useState } from "react";
import "./rotatingcard.css";
import oar2 from "./oar2.jpg";

function RotatingCard() {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const sensitivity = 1;

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      e.preventDefault();
      const deltaX = e.clientX - startX;
      setRotation((prevRotation) => prevRotation + deltaX * sensitivity);
      setStartX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      e.preventDefault();
      const deltaX = e.touches[0].clientX - startX;
      setRotation((prevRotation) => prevRotation + deltaX * sensitivity);
      setStartX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="card-container"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="card" style={{ transform: `rotateY(${rotation}deg)` }}>
        <div className="card-face card-front">
          <img src={oar2} alt="Front" draggable={false} />
        </div>
        <div className="card-face card-back">
          <p>Contact Me! </p>
          <p>437-925-6758 lujoey886@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default RotatingCard;
