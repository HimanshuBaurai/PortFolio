import React, { useState } from 'react';
import './Projects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faCode, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

const ProjectCard = ({ project, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`project-card ${isInView ? 'animate' : ''}`}
      style={{ animationDelay: `${index * 0.2}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-image-container">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay"></div>
      </div>

      <div className="project-content">
        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="project-tag">{tag}</span>
          ))}
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>


      </div>

      <div className={`project-details ${isHovered ? 'show' : ''}`}>
        <div className="details-content">
          <h4>Key Features</h4>
          <ul>
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>

          <h4>Tech Stack</h4>
          <div className="tech-stack">
            {project.techStack.map((tech, i) => (
              <span key={i} className="tech-item">{tech}</span>
            ))}
          </div>

        </div>
        <div className="project-links">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link live-link"
              aria-label="View live project"
            >
              <FontAwesomeIcon icon={faLink} />
              <span>Live Demo</span>
            </a>
          )}

          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link code-link"
              aria-label="View source code"
            >
              <FontAwesomeIcon icon={faCode} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const projectsData = [
    {
      title: "Nexus AI",
      description: "A multi-agent intelligence platform with 8 specialized agents, enabling 10,000x faster agent creation while maintaining high response accuracy.",
      image: "nexus-ai.jpg", // You'll need to add this image
      tags: ["AI", "Multi-Agent", "LangChain"],
      features: [
        "8 specialized AI agents for different tasks",
        "Advanced RAG capabilities with LangChain & LangGraph",
        "45% reduced latency in document processing",
        "Seamless integration with 150+ AI models"
      ],
      techStack: ["Agno", "LangChain", "LangGraph", "AstraDB", "Sentence-transformers"],
      liveLink: "https://nexus-ai-multi-agent-intelligence.streamlit.app/",
      codeLink: "https://github.com/HimanshuBaurai/NexusAI-Multi-Agent-Intelligence-Hub"
    },
    {
      title: "KnowledgeFlow",
      description: "A full-stack educational platform with React/Redux frontend and Node.js backend, featuring real-time payment processing via RazorPay.",
      image: "KnowledgeFlowImage.png",
      tags: ["MERN", "Education", "Full Stack"],
      features: [
        "User authentication and admin dashboard with analytics",
        "Dynamic course management system",
        "Cloud-based media delivery",
        "Personalized playlists and cross-platform compatibility"
      ],
      techStack: ["React", "Redux", "Node.js", "MongoDB", "Chakra UI", "Cloudinary", "Razorpay"],
      liveLink: "https://www.knowledgeflow.tech/",
      codeLink: "https://github.com/HimanshuBaurai/KnowledgeFlow-Online-Course-Platform"
    },
    {
      title: "The Vegan Nexus",
      description: "A vegan lifestyle platform celebrating cruelty-free choices that resonate beyond the plate.",
      image: "VeganNexusImage.png",
      tags: ["Web App", "React", "GSAP"],
      features: [
        "Curated vegan recipes and meal plans",
        "Community forum for sharing experiences",
        "Resource directory for vegan products",
        "Educational content on sustainable living"
      ],
      techStack: ["React","GSAP", "JS"],
      liveLink: "https://vegan-nexus-frontend.vercel.app/",
      codeLink: "https://github.com/HimanshuBaurai/VeganNexusFrontend"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-title">
        <h2>Featured Projects</h2>
        <div className="underline"></div>
        <p>Showcasing my technical skills through real-world applications</p>
      </div>

      <div className="projects-container" ref={ref}>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isInView={inView}
            />
          ))}
        </div>

        <div className="more-projects">
          <a
            href="https://github.com/HimanshuBaurai"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-more"
          >
            <span>View More Projects</span>
            <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;