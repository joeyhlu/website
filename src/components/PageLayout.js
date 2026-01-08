import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './PageLayout.css';

const PageLayout = ({ children, title }) => {
  return (
    <div className="page-container">
      <header className="header">
        <Link to="/" className="logo">Joey Lu</Link>
        <nav className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blogs">Writing</Link>
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

      {title && <h1 className="page-title">{title}</h1>}

      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <div className="footer-line"></div>
        <p>{new Date().getFullYear()} © Joey Lu</p>
      </footer>
    </div>
  );
};

export default PageLayout;

