import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import '../styles/About.css';

const About = () => {
  return (
    <PageLayout title="me">
      <div className="about-content">
        <div className="about-header">
          <img src="/PersonalImage.png" alt="Joey Lu" className="about-photo" />
          <div className="about-intro">
            <p>
              I&apos;m <strong>Joey</strong>, a Computer Science student at the{' '}
              <a href="https://uwaterloo.ca" target="_blank" rel="noopener noreferrer">University of Waterloo</a>.
              I build full-stack products, data pipelines, and AI tools that people actually use.
            </p>
            <p>
              Right now I&apos;m a <strong>Software Engineering Intern</strong> at{' '}
              <a href="https://www.telus.com" target="_blank" rel="noopener noreferrer">TELUS</a> and a{' '}
              <strong>Claude Campus Ambassador</strong> with{' '}
              <a href="https://anthropic.com" target="_blank" rel="noopener noreferrer">Anthropic</a>.
            </p>
            <p>
              Before that, I moved legacy analytics to Python and ran ML on labour data at{' '}
              <a href="https://www.statcan.gc.ca" target="_blank" rel="noopener noreferrer">Statistics Canada</a>, built
              LLM support tooling and Go services at{' '}
              <a href="https://windscribe.com" target="_blank" rel="noopener noreferrer">Windscribe</a>, and worked on
              autonomy software at{' '}
              <a href="https://waterlooaerialrobotics.com" target="_blank" rel="noopener noreferrer">Waterloo Aerial Robotics</a>.
            </p>
          </div>
        </div>

        <Link to="/projects" className="about-projects-banner">
          <span className="about-projects-banner-text">stuff i&apos;ve built</span>
          <span className="about-projects-banner-arrow">&rarr;</span>
        </Link>

        <section className="about-section">
          <h2>What I work on</h2>
          <ul>
            <li>Full-stack apps with React, Next.js, and FastAPI</li>
            <li>Data and ML pipelines that hold up in production</li>
            <li>LLM tooling: evals, prompts, and automation</li>
            <li>Developer tools that remove friction</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Tech</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <h3>Languages</h3>
              <p>Python, TypeScript, Java, C++, Go, SQL</p>
            </div>
            <div className="tech-item">
              <h3>Stack</h3>
              <p>React, Next.js, FastAPI, Node.js, PyTorch, PostgreSQL</p>
            </div>
            <div className="tech-item">
              <h3>Tools</h3>
              <p>Git, Docker, Linux, AWS, GCP</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Say hi</h2>
          <p className="contact-text">
            Always happy to chat about internships, projects, or ideas.
          </p>
          <div className="contact-links">
            <a href="mailto:lujoey886@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/joey-lu-451329309/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.github.com/joeyhlu" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default About;
