import React from 'react';
import PageLayout from '../components/PageLayout';
import '../styles/About.css';

const About = () => {
  return (
    <PageLayout title="About">
      <div className="about-content">
        <div className="about-header">
          <img src="/PersonalImage.png" alt="Joey Lu" className="about-photo" />
          <div className="about-intro">
            <p>
              Hey! I'm <strong>Joey</strong> — CS student at UWaterloo, building things that work.
            </p>
            <p>
              Currently interning at Windscribe working on support systems and automation. 
              Previously built autonomous camera systems at Waterloo Aerial Robotics.
            </p>
          </div>
        </div>

        <section className="about-section">
          <h2>What I've worked on</h2>
          <ul>
            <li>Prompt engineering & chatbot optimization — reduced manual support by 10%</li>
            <li>Camera configuration systems with <strong>OpenCV</strong> and <strong>PiCamera</strong></li>
            <li>Full-stack web apps with <strong>React</strong>, <strong>Next.js</strong>, <strong>FastAPI</strong></li>
            <li>Developer tools — VSCode extensions, NPM packages, CLI tools</li>
            <li>Mobile apps with <strong>Flutter</strong> and <strong>Swift</strong></li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Tech stack</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <h3>Languages</h3>
              <p>Python, JavaScript, TypeScript, Java, C++, Swift, Kotlin, SQL</p>
            </div>
            <div className="tech-item">
              <h3>Frameworks</h3>
              <p>React, Next.js, FastAPI, Node.js, Django, Flutter, PyTorch</p>
            </div>
            <div className="tech-item">
              <h3>Tools</h3>
              <p>AWS, GCP, Docker, Git, PostgreSQL, MongoDB, Firebase, OpenCV</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Say hi</h2>
          <p className="contact-text">
            Open to chat about projects or opportunities.
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
