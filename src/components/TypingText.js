import React, { useState, useEffect } from "react";
import "./TypingText.css";

function TypingText({ text, speed }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayedText(""); 

    if (speed <= 0) return; 

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    
    return () => clearInterval(interval);
  }, [text, speed]);

  return <div className="typing-text">{displayedText}</div>;
}

export default TypingText;
