// src/components/Home.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Star from "./Star"; 
import TypingText from "./TypingText"; 
import RotatingCard from "./rotatingCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../App.css"; 

const Home = () => {
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 5,
  }));
  return (
    <div className="sky">
      {stars.map((star) => (
        <Star
          key={star.id}
          left={star.left}
          delay={star.delay}
          duration={star.duration}
        />
      ))}
      <div class="container">
        <div class="typing-container">
          <TypingText text="Jooey Lu" speed={100} />
          <p className="bio-text">Building cool stuff</p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              class="fa-cog"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              class="fa-cog"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              class="fa-cog"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
          <div className="button-group">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-button"
            >
              About Me
            </a>
            <Link to="/projects" className="custom-button">
              View Projects
            </Link>
          </div>
        </div>
        <div className="App">
          <RotatingCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
