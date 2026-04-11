import React from 'react';
import { Link } from 'react-router-dom';
import './PageLayout.css';

const PageLayout = ({ children, title }) => {
  return (
    <div className="page-container">
      <header className="header">
        <Link to="/" className="logo">joey lu</Link>
        <nav className="nav-links">
          <Link to="/about">about</Link>
          <Link to="/projects">projects</Link>
          <Link to="/blogs">writing</Link>
        </nav>
      </header>

      {title && <h1 className="page-title">{title}</h1>}

      <main className="main-content">
        {children}
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

export default PageLayout;
