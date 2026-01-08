import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageLayout from '../components/PageLayout';
import '../styles/Projects.css';

const Projects = () => {
  const [repos, setRepos] = useState([]);

  const selectedProjects = ['uofthacks', 'tracksite', 'qhacks2025', 'SoundVeil', 'stubook_master', 'website'];
  
  const nameMap = {
    uofthacks: 'ProteccAPI',
    tracksite: 'Track Site',
    SoundVeil: 'SoundVeil',
    stubook_master: 'Stubook',
    website: 'Personal Website',
    qhacks2025: 'QHacks 2025'
  };

  const descriptionMap = {
    uofthacks: 'NPM package & VSCode extension for API key security with 100+ downloads',
    tracksite: 'Bookmark manager with folders',
    SoundVeil: 'Audio steganography tool for hiding messages in sound',
    stubook_master: 'Cross-platform iOS/Android study app with ~100 downloads',
    website: 'This portfolio site built with React',
    qhacks2025: 'Hackathon project at QHacks 2025'
  };

  const tagsMap = {
    uofthacks: ['Node.js', 'React', 'CSS'],
    tracksite: ['Python', 'Django'],
    SoundVeil: ['React', 'Node.js'],
    stubook_master: ['Swift', 'Flutter', 'Kotlin', 'NoSQL'],
    website: ['React', 'JavaScript'],
    qhacks2025: ['Python', 'AI']
  };

  const docLinkMap = {
    uofthacks: '/uofthacks.png',
    tracksite: '/tracksite.png',
    SoundVeil: '/SoundVeil.png',
    stubook_master: '/stubook_master.png',
    website: '/website.png',
    qhacks2025: '/qhacks2025.png'
  };

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/joeyhlu/repos');
        const filteredRepos = response.data.filter(repo => selectedProjects.includes(repo.name));
        setRepos(filteredRepos);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageLayout title="Projects">
      <div className="projects-grid">
        {repos.map(repo => {
          const docLink = docLinkMap[repo.name];
          return (
            <a 
              key={repo.id} 
              href={repo.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-card"
            >
              {docLink && <img src={docLink} alt={repo.name} />}
              <div className="project-info">
                <h3>{nameMap[repo.name] || repo.name}</h3>
                <p>{descriptionMap[repo.name] || repo.description}</p>
                <div className="tags">
                  {(tagsMap[repo.name] || []).map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </PageLayout>
  );
};

export default Projects;
