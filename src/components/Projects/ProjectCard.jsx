import React from 'react';
import './Projects.css';

const ProjectCard = ({ project }) => {
  const { title, description, image, tags, demoUrl, githubUrl } = project;

  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={demoUrl} className="btn btn-primary me-2">Live Demo</a>
          <a href={githubUrl} className="btn btn-secondary">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;