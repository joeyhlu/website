// pages/about.js

import React from "react";
import Star from "../components/Star";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
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
      <div className="about-content">
        <div className="about-image">
          <img src="./PersonalImage.png" />
        </div>
        <div className="about-text">
          <h1>Hey there, I’m Joey!</h1>
          <p>
            I’m a current first-year CS student at the University of Waterloo.
            I'm passionate about leveraging technology to solve real-world
            problems and exploring the endless possibilities of coding and
            innovation.
          </p>
          <p>
            Currently, I’m delving into foundational topics such as programming,
            algorithms, data structures, and artificial intelligence. Looking
            ahead, I’m excited to contribute to impactful projects, collaborate
            with fellow peers, and deepen my knowledge.
          </p>
          <p>
            Feel free to <Link to="/projects">explore my projects</Link> or get in
            touch with me at lujoey886@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
