import { useEffect, useState } from "react";
import axios from "axios";
import "./Projects.css";
import "../App.css";
import Star from "../components/Star";

const Projects = () => {
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 5,
  }));

  const [repos, setRepos] = useState([]);

  // Projects you want to display
  const selectedProjects = [
    "qhacks2025",
    "uofthacks",
    "tracksite",
    "SoundVeil",
    "stubook_master",
    "website",
    "Tower-Defense",
  ];

  const nameMap = {
    "Tower-Defense": "Plants vs Zombies Tower Defense Remake",
    "qhacks2025": "Visualise It",
    uofthacks: "ProteccAPI",
    tracksite: "TrackSite",
    SoundVeil: "SoundVeil",
    stubook_master: "Stubook",
    website: "This Website",
  };

  const descriptionMap = {
    "Tower-Defense": "Tower Defense",
    "qhacks2025": "A 3D visualiser that augments reality in real time | Hackathon Winner",
    uofthacks:
"A CLI tool to scan code repos for sensitive data leaks and vulnerabilities",
    tracksite: "A bookmark manager for everything!",
    stubook_master: "Your all in one student handbook",
    SoundVeil: "Audio steganography and decryption",
  };

  const tagsMap = {
    "Tower-Defense": ["C#", "Unity"],
    "qhacks2025": ["Python", "Pytorch", "OpenCV", "HuggingFace", "NumPy"],
    uofthacks: ["Node.js", "React", "CSS"],
    tracksite: ["React", "SQL", "Python", "JavaScript", "FastAPI"],
    stubook_master: ["Flutter", "Dart", "iOS", "Android"],
    SoundVeil: ["HTML", "CSS", "JavaScript"],
    website: ["React", "JavaScript"],
  };


  const docLinkMap = {
    uofthacks: "https://apigonekaboomhelp.us/",
  };

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const username = "joeyhlu";
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );
        const filteredRepos = response.data.filter((repo) =>
          selectedProjects.includes(repo.name)
        );

        setRepos(filteredRepos);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="sky" style={{ paddingTop: "80px", textAlign: "center" }}>
      {stars.map((star) => (
        <Star
          key={star.id}
          left={star.left}
          delay={star.delay}
          duration={star.duration}
        />
      ))}
      <p className="project-title">My Projects</p>
      <div
        style={{
          display: "grid",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          gridTemplateColumns: "repeat(2, 400px)",
        }}
      >
        {repos.map((repo) => {
          const docLink = docLinkMap[repo.name] || repo.html_url;

          return (
            <div className="project-container" key={repo.id}>
              <a href={docLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={`./${repo.name}.png`}
                  alt={repo.name}
                  style={{
                    width: "375px",
                    borderRadius: "5px",
                    height: "250px",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              </a>
              <p className="project-link">
                <a
                  href={docLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {nameMap[repo.name]}
                </a>
              </p>
              <p className="project-description">
                {descriptionMap[repo.name]}
              </p>
              <div className="project-tags">
                {tagsMap[repo.name]?.map((tag, index) => (
                  <span className="project-tag" key={index}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
