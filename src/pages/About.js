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
              I&apos;m <strong>Joey</strong> — Computer Science at the{' '}
              <a href="https://uwaterloo.ca" target="_blank" rel="noopener noreferrer">University of Waterloo</a>.
              I like shipping tools people use, digging into data and systems, and learning how ML fits real workflows.
            </p>
            <p>
              I&apos;m a <strong>Claude Campus Ambassador</strong> with{' '}
              <a href="https://anthropic.com" target="_blank" rel="noopener noreferrer">Anthropic</a>, helping run campus
              programs around agent-style development and MCP. I&apos;ve also been a{' '}
              <strong>Statistical Developer Intern</strong> at{' '}
              <a href="https://www.statcan.gc.ca" target="_blank" rel="noopener noreferrer">Statistics Canada</a>, moving
              legacy SAS analytics to Python, building pipeline monitoring, and running ML on labour survey data.
            </p>
            <p>
              Before that I interned at{' '}
              <a href="https://windscribe.com" target="_blank" rel="noopener noreferrer">Windscribe</a> on support
              systems — prompt engineering and eval for the chatbot, plus Go services that cut manual support work. On
              campus I was on autonomy software at{' '}
              <a href="https://waterlooaerialrobotics.com" target="_blank" rel="noopener noreferrer">Waterloo Aerial Robotics</a>, mostly Python, OpenCV, and PiCamera.
            </p>
          </div>
        </div>

        <Link to="/projects" className="about-projects-banner">
          <span className="about-projects-banner-text">stuff i&apos;ve built</span>
          <span className="about-projects-banner-arrow">&rarr;</span>
        </Link>

        <section className="about-section">
          <h2>What I tend to work on</h2>
          <ul>
            <li>Full-stack apps — <strong>React</strong>, <strong>Next.js</strong>, <strong>FastAPI</strong>, Docker, real-time WebSockets</li>
            <li>Data &amp; ML pipelines — pandas workflows, scikit-learn / PyTorch, making models usable in production-ish settings</li>
            <li>LLM tooling in practice — eval loops, prompt design, and automation around support or internal tools</li>
            <li>Developer UX — NPM packages, editor extensions, and small tools that reduce foot-guns (e.g. API keys)</li>
            <li>Robotics-adjacent software — camera stacks, testing, and reliability over flashy demos</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Tech I reach for</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <h3>Languages</h3>
              <p>Python, TypeScript, JavaScript, Java, C++, Go, SQL, Swift, Kotlin</p>
            </div>
            <div className="tech-item">
              <h3>Stack</h3>
              <p>React, Next.js, FastAPI, Node.js, PyTorch, TensorFlow, Docker, PostgreSQL</p>
            </div>
            <div className="tech-item">
              <h3>Tools</h3>
              <p>Git, Linux, OpenCV, PyTest, AWS/GCP basics, Cursor</p>
            </div>
          </div>
        </section>

        <section className="about-section about-section--cta">
          <h2>Projects</h2>
          <p className="about-cta-lead">
            ValueDex, Quantara, CourseCraft, Visualise It, ProteccAPI, and more — write-ups, tags, and links live on the projects page.
          </p>
          <Link to="/projects" className="about-to-projects">
            <span>open projects</span>
            <span className="about-to-projects-arrow">&rarr;</span>
          </Link>
        </section>

        <section className="about-section">
          <h2>Say hi</h2>
          <p className="contact-text">
            Happy to talk about internships, side projects, or anything overlapping the above.
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
