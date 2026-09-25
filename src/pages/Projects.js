import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import PageLayout from '../components/PageLayout';
import imgPawtrace from '../assets/project-previews/pawtrace.png';
import imgCardiq from '../assets/project-previews/cardiq.png';
import imgValuedex from '../assets/project-previews/valuedex.png';
import imgQuantara from '../assets/project-previews/quantara.png';
import imgCoursecraft from '../assets/project-previews/coursecraft.png';
import imgQhacks from '../assets/project-previews/qhacks2025.png';
import imgUofthacks from '../assets/project-previews/uofthacks.png';
import imgTracksite from '../assets/project-previews/tracksite.png';
import imgSoundVeil from '../assets/project-previews/SoundVeil.png';
import imgStubook from '../assets/project-previews/stubook_master.png';
import imgWebsite from '../assets/project-previews/website.png';
import '../styles/Projects.css';

const projects = [
  {
    id: 'pawtrace',
    name: 'PawTrace',
    demoUrl: 'https://devpost.com/software/tailsignal',
    demoLabel: 'devpost',
    image: imgPawtrace,
    description: 'Missing-pet search platform — Hack the North winner.',
    detail:
      'PawTrace combines community sightings and available camera footage to determine where a lost pet is most likely to be, turning scattered reports into a focused search area on a live map.',
    tags: ['Hack the North', 'Winner'],
  },
  {
    id: 'visualise-it',
    name: 'Visualise It',
    repoUrl: 'https://github.com/joeyhlu/qhacks2025',
    image: imgQhacks,
    description: 'Real-time design visualisation with GenAI — QHacks Best Mayor\'s Innovation Challenge.',
    detail:
      'Python pipeline with PyTorch, OpenCV, and Hugging Face; LLM/GenAI APIs for generative features; dynamic masking from pose landmarks, segmentation, and contours with homography for aligned real-time overlays.',
    tags: ['Python', 'PyTorch', 'OpenCV', 'HuggingFace'],
    starSource: { owner: 'joeyhlu', repo: 'qhacks2025' },
  },
  {
    id: 'valuedex',
    name: 'ValueDex',
    repoUrl: 'https://github.com/jkhatri23/Valuedex',
    demoUrl: 'https://valuedex.ca',
    image: imgValuedex,
    description: 'Pokémon card value predictor — historical market data and ML to forecast prices.',
    detail:
      'Full-stack app: Next.js 14, TypeScript, Tailwind, Recharts on the frontend; FastAPI, SQLAlchemy, Pandas, scikit-learn on the backend. SQLite for dev, PostgreSQL for prod. Search cards, price history, predictions, and investment-style ratings via a documented API. Live at valuedex.ca.',
    tags: ['Next.js', 'TypeScript', 'FastAPI', 'ML', 'PostgreSQL'],
    starSource: { owner: 'jkhatri23', repo: 'Valuedex' },
  },
  {
    id: 'cardiq',
    name: 'CardIQ',
    repoUrl: 'https://github.com/cursingparrot4/HT6-Payment-Optimization',
    image: imgCardiq,
    description: 'Work in progress — routes recurring payments to the best card for your priorities: rewards, credit score, welcome bonuses, fees, and risk.',
    detail:
      'Work in progress. CardIQ came from a common problem: people have multiple cards and recurring bills, but it is hard to know which card should be used for each payment. The best card is not always the one with the highest rewards. Sometimes you want to protect your credit score, hit a welcome bonus, or care more about cash flow, avoiding fees, or making sure an important bill does not fail. CardIQ routes recurring payments like rent, utilities, insurance, subscriptions, and transit to the best card for your needs. You set a priority order for your bills and see how that order affects the recommended card; for each payment it compares available cards on rewards, bonus progress, fees, utilization, available credit, and risk. You can also describe your goals in plain language — for example, that you are applying for a mortgage and want to keep utilization low — and CardIQ turns that into priorities the optimizer can use.',
    tags: ['Python', 'FastAPI', 'Next.js', 'TypeScript'],
    starSource: { owner: 'cursingparrot4', repo: 'HT6-Payment-Optimization' },
  },
  {
    id: 'quantara',
    name: 'Quantara',
    repoUrl: 'https://github.com/achitaan/Quantara',
    image: imgQuantara,
    description: 'Full-stack trading platform with real-time WebSocket alerts, sentiment analysis, and Dockerized microservices.',
    detail:
      'FastAPI backend for cashflow, forecasting, anomaly detection, Plaid, and streaming alerts; React/Next.js dashboards and chatbots; Dockerized ingestion, sentiment, and execution services for low-latency workflows.',
    tags: ['TypeScript', 'Next.js', 'FastAPI', 'Docker', 'TensorFlow'],
    starSource: { owner: 'achitaan', repo: 'Quantara' },
  },
  {
    id: 'coursecraft',
    name: 'CourseCraft',
    repoUrl: 'https://github.com/joeyhlu/coursecraft',
    image: imgCoursecraft,
    description: 'Say what you want and get a clean, optimized class schedule back.',
    detail:
      'Every semester is the same mess: refreshing the course portal, flipping between tabs, checking Rate My Professor, trying to avoid 8 AMs, and texting friends to see what they are taking. The system technically works, but it feels like it has not changed in 20 years. The bigger issue is that your schedule shapes your semester — bad time slots, exhausting back-to-backs, or poorly rated professors affect your energy, focus, and sometimes your grades, and small decisions during course selection compound over four months. Instead of clicking through dropdowns and manually testing sections for conflicts, CourseCraft lets you just say what you want and get a clean, optimized schedule back.',
    tags: ['Node.js', 'Express', 'JavaScript'],
    starSource: { owner: 'joeyhlu', repo: 'coursecraft' },
  },
  {
    id: 'proteccapi',
    name: 'ProteccAPI',
    repoUrl: 'https://github.com/joeyhlu/uofthacks',
    image: imgUofthacks,
    description: 'NPM package and VSCode extension for API key security — 100+ downloads.',
    detail:
      'Developer tooling to reduce accidental key leaks in repos and local workflows; shipped as an NPM package and editor integration for UofTHacks 12.',
    tags: ['Node.js', 'React', 'CSS'],
    starSource: { owner: 'joeyhlu', repo: 'uofthacks' },
  },
  {
    id: 'tracksite',
    name: 'Track Site',
    repoUrl: 'https://github.com/joeyhlu/tracksite',
    image: imgTracksite,
    description: 'Bookmark manager with folders — save and organise links in a simple web UI.',
    detail:
      'Django-backed bookmark organiser with folder hierarchies and quick add flows; Python server-side rendering and persistence for a lightweight alternative to heavy read-later apps.',
    tags: ['Python', 'Django'],
    starSource: { owner: 'joeyhlu', repo: 'tracksite' },
  },
  {
    id: 'soundveil',
    name: 'SoundVeil',
    repoUrl: 'https://github.com/joeyhlu/SoundVeil',
    image: imgSoundVeil,
    description: 'Audio steganography — hide messages inside sound files.',
    detail:
      'React and Node.js tooling to embed and recover hidden payloads in audio; explores encoding strategies and a simple UI for experimenting with steganography on WAV or browser-friendly formats.',
    tags: ['React', 'Node.js'],
    starSource: { owner: 'joeyhlu', repo: 'SoundVeil' },
  },
  {
    id: 'stubook',
    name: 'Stubook',
    repoUrl: 'https://github.com/joeyhlu/stubook_master',
    image: imgStubook,
    description: 'Cross-platform study app for iOS and Android — ~100 downloads.',
    detail:
      'Mobile study companion built with Flutter and native pieces (Swift/Kotlin) where needed; local and cloud-friendly patterns for notes, decks, and session tracking with a NoSQL-oriented data model.',
    tags: ['Swift', 'Flutter', 'Kotlin', 'NoSQL'],
    starSource: { owner: 'joeyhlu', repo: 'stubook_master' },
  },
  {
    id: 'personal-website',
    name: 'Personal Website',
    repoUrl: 'https://github.com/joeyhlu/website',
    image: imgWebsite,
    description: 'This portfolio — React, routing, and a clean reading experience.',
    detail:
      'The site you are on: client-side routing, project showcase, and deployment tuned for a custom domain on static hosting.',
    tags: ['React', 'JavaScript'],
    starSource: { owner: 'joeyhlu', repo: 'website' },
  },
];

const Projects = () => {
  const [stars, setStars] = useState({});
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/joeyhlu/repos?per_page=100');
        const starMap = {};
        response.data.forEach(repo => {
          starMap[`joeyhlu/${repo.name}`] = repo.stargazers_count;
        });
        try {
          const vd = await axios.get('https://api.github.com/repos/jkhatri23/Valuedex');
          starMap['jkhatri23/Valuedex'] = vd.data.stargazers_count;
        } catch {
          /* optional */
        }
        try {
          const qa = await axios.get('https://api.github.com/repos/achitaan/Quantara');
          starMap['achitaan/Quantara'] = qa.data.stargazers_count;
        } catch {
          /* optional */
        }
        setStars(starMap);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };
    fetchStars();
  }, []);

  const toggle = useCallback(id => {
    setOpenId(prev => (prev === id ? null : id));
  }, []);

  return (
    <PageLayout title="stuff i've built">
      <div className="projects-list">
        {projects.map(project => {
          const starCount = project.starSource
            ? stars[`${project.starSource.owner}/${project.starSource.repo}`]
            : undefined;
          const isOpen = openId === project.id;
          const primaryUrl = project.repoUrl || project.demoUrl;

          return (
            <div key={project.id} className={`project-item${isOpen ? ' project-item--open' : ''}`}>
              <button
                type="button"
                className="project-row-head"
                onClick={() => toggle(project.id)}
                aria-expanded={isOpen}
                aria-controls={`panel-${project.id}`}
                id={`head-${project.id}`}
              >
                <span className="project-chevron" aria-hidden>{isOpen ? '\u2212' : '+'}</span>
                <div className="project-main">
                  <h3 className="project-name">
                    {project.name}
                    {starCount > 0 && <span className="project-stars">{starCount}</span>}
                  </h3>
                  <p className="project-desc">{project.description}</p>
                </div>
                <div className="project-tags" onClick={e => e.stopPropagation()}>
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </button>

              <div className="project-hover-preview" aria-hidden>
                <img src={project.image} alt="" />
              </div>

              <div
                id={`panel-${project.id}`}
                role="region"
                aria-labelledby={`head-${project.id}`}
                className="project-panel"
                hidden={!isOpen}
              >
                <div className="project-panel-inner">
                  <a
                    href={primaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-panel-img-link"
                  >
                    <img src={project.image} alt={`${project.name} preview`} />
                  </a>
                  <div className="project-panel-copy">
                    <p className="project-detail">{project.detail}</p>
                    <div className="project-panel-links">
                      {project.repoUrl && (
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">github</a>
                      )}
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          {project.demoLabel || 'live site'}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </PageLayout>
  );
};

export default Projects;
