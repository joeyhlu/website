import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <div className="header-left">
          <Link to="/" className="logo">joey lu</Link>
          <span className="tagline">building things that work</span>
        </div>
        <nav className="nav-links">
          <Link to="/about">me</Link>
          <Link to="/projects">stuff</Link>
          <Link to="/blogs">writing</Link>
        </nav>
      </header>

      <main className="home-content">
        <p className="intro">
          CS @ UWaterloo. Full-stack dev, AI, systems.
        </p>

        <ul className="top-list">
          <li>Claude Ambassador <a href="https://anthropic.com" target="_blank" rel="noopener noreferrer"><strong>@Anthropic</strong></a></li>
          <li>Statistical Developer Intern <a href="https://www.statcan.gc.ca" target="_blank" rel="noopener noreferrer"><strong>@Statistics Canada</strong></a></li>
        </ul>

        <ul className="top-list">
          <li className="section-label">what i've been building:</li>
        </ul>
        <ul className="sub-list">
          <li>built <a href="https://github.com/jkhatri23/Valuedex" target="_blank" rel="noopener noreferrer"><strong>ValueDex</strong></a>, a Pokémon card value predictor with ML (<a href="https://valuedex.ca" target="_blank" rel="noopener noreferrer">valuedex.ca</a>)</li>
          <li>built <a href="https://github.com/joeyhlu/quantara" target="_blank" rel="noopener noreferrer"><strong>Quantara</strong></a>, a full-stack trading platform with WebSockets, sentiment, and Dockerized services</li>
          <li>built <a href="https://github.com/joeyhlu/qhacks2025" target="_blank" rel="noopener noreferrer"><strong>Visualise It</strong></a>, real-time design visualisation with GenAI &mdash; QHacks Mayor&apos;s Innovation Challenge</li>
          <li>built <a href="https://github.com/joeyhlu/uofthacks" target="_blank" rel="noopener noreferrer"><strong>ProteccAPI</strong></a>, NPM + VSCode tooling for API key security (100+ downloads)</li>
        </ul>

        <ul className="top-list">
          <li className="section-label">previously:</li>
        </ul>
        <ul className="sub-list">
          <li>Intern <a href="https://windscribe.com" target="_blank" rel="noopener noreferrer"><strong>Windscribe</strong></a></li>
          <li>Autonomy Software <a href="https://waterlooaerialrobotics.com" target="_blank" rel="noopener noreferrer"><strong>Waterloo Aerial Robotics</strong></a></li>
        </ul>

        <div className="cta-section">
          <Link to="/about" className="cta-button">
            <span className="cta-text">more about me</span>
            <span className="cta-arrow">&rarr;</span>
          </Link>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-links">
          <a href="https://www.github.com/joeyhlu" target="_blank" rel="noopener noreferrer">github</a>
          <a href="https://www.linkedin.com/in/joey-lu-451329309/" target="_blank" rel="noopener noreferrer">linkedin</a>
          <a href="mailto:lujoey886@gmail.com">email</a>
        </div>
        <p>{new Date().getFullYear()} &copy; Joey Lu</p>
      </footer>
    </div>
  );
};

export default Home;
