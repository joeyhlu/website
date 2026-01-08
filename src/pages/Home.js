import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import BracketGame from '../components/BracketGame';
import '../styles/Home.css';

const Home = () => {
  const [showGame, setShowGame] = useState(false);

  return (
    <div className="home-container">
      {/* Game Modal */}
      {showGame && <BracketGame onClose={() => setShowGame(false)} />}

      {/* Header */}
      <header className="header">
        <Link to="/" className="logo">Joey Lu</Link>
        <nav className="nav-links">
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <Link to="/projects">Projects</Link>
        </nav>
        <div className="header-actions">
          <a href="https://www.github.com/joeyhlu" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/joey-lu-451329309/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-text">
          Using <em>software engineering + problem solving</em> to create elegant and scalable solutions to <em>real world problems</em>
        </h1>
      </section>

      {/* Education Section */}
      <section className="section" id="education">
        <h2 className="section-title">Education</h2>
        <div className="card">
          <div className="card-logo">🎓</div>
          <div className="card-content">
            <div className="card-header-row">
              <h3 className="card-name">University of Waterloo</h3>
              <span className="card-date">Sep 2024 – Present</span>
            </div>
            <p className="card-role">Bachelor of Computer Science</p>
            <p className="card-location">Waterloo, ON</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section" id="experience">
        <h2 className="section-title">Experience</h2>
        
        <div className="card">
          <div className="card-logo">🛡️</div>
          <div className="card-content">
            <div className="card-header-row">
              <h3 className="card-name">Windscribe Inc</h3>
              <span className="card-date">May 2025 – Aug 2025</span>
            </div>
            <p className="card-role">Support System Engineer Intern</p>
            <p className="card-location">Toronto, ON</p>
          </div>
        </div>

        <div className="card">
          <div className="card-logo">🤖</div>
          <div className="card-content">
            <div className="card-header-row">
              <h3 className="card-name">Waterloo Aerial Robotics</h3>
              <span className="card-date">Nov 2024 – Apr 2025</span>
            </div>
            <p className="card-role">Autonomy Software Developer</p>
            <p className="card-location">Waterloo, ON</p>
          </div>
        </div>

        <div className="card">
          <div className="card-logo">🌐</div>
          <div className="card-content">
            <div className="card-header-row">
              <h3 className="card-name">SoarToWorld</h3>
              <span className="card-date">Dec 2023 – Mar 2024</span>
            </div>
            <p className="card-role">Web Developer Intern</p>
            <p className="card-location">Richmond Hill, ON</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <Link to="/projects" className="cta-button">
          see what i've built →
        </Link>
        <button className="game-button" onClick={() => setShowGame(true)}>
          play a game 🎮
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-line"></div>
        <p>{new Date().getFullYear()} © Joey Lu</p>
      </footer>
    </div>
  );
};

export default Home;
