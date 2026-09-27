import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <div className="header-left">
          <Link to="/" className="logo">joey lu</Link>
        </div>
        <nav className="nav-links">
          <Link to="/about">me</Link>
          <Link to="/projects">stuff</Link>
        </nav>
      </header>

      <main className="home-content">
        <p className="intro">
          Software and ML engineer constantly exploring and pushing the boundaries of tech.
        </p>

        <ul className="top-list">
          <li>CS <a href="https://uwaterloo.ca" target="_blank" rel="noopener noreferrer"><strong>@UWaterloo</strong></a></li>
          <li>SWE Intern <a href="https://www.telus.com" target="_blank" rel="noopener noreferrer"><strong>@TELUS</strong></a></li>
          <li>Claude Campus Ambassador <a href="https://anthropic.com" target="_blank" rel="noopener noreferrer"><strong>@Anthropic</strong></a></li>
        </ul>

        <ul className="top-list">
          <li className="section-label">things i&apos;ve built:</li>
        </ul>
        <ul className="sub-list">
          <li><a href="https://devpost.com/software/tailsignal" target="_blank" rel="noopener noreferrer"><strong>PawTrace</strong></a>, a missing-pet search platform &mdash; Hack the North winner</li>
          <li><a href="https://github.com/joeyhlu/qhacks2025" target="_blank" rel="noopener noreferrer"><strong>Visualise It</strong></a>, real-time design visualisation with GenAI &mdash; QHacks winner</li>
          <li><a href="https://valuedex.ca" target="_blank" rel="noopener noreferrer"><strong>ValueDex</strong></a>, a Pokémon card price predictor (1000+ users)</li>
        </ul>

        <ul className="top-list">
          <li className="section-label">previously:</li>
        </ul>
        <ul className="sub-list">
          <li>Statistical Developer Intern <a href="https://www.statcan.gc.ca" target="_blank" rel="noopener noreferrer"><strong>Statistics Canada</strong></a></li>
          <li>Intern <a href="https://windscribe.com" target="_blank" rel="noopener noreferrer"><strong>Windscribe</strong></a></li>
          <li>Autonomy Software <a href="https://waterlooaerialrobotics.com" target="_blank" rel="noopener noreferrer"><strong>Waterloo Aerial Robotics</strong></a></li>
        </ul>

        <div className="cta-section">
          <Link to="/about" className="cta-button">
            <span className="cta-text">more about me</span>
            <span className="cta-arrow">&rarr;</span>
          </Link>
          <Link to="/projects" className="cta-button">
            <span className="cta-text">see my projects</span>
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
