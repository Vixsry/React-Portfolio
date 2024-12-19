import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js",
      image: "/api/placeholder/350/200",
      tags: ["React", "Node.js", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Real-time social media analytics dashboard",
      image: "/api/placeholder/350/200",
      tags: ["React", "Firebase", "Charts.js"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management application",
      image: "/api/placeholder/350/200",
      tags: ["React", "Redux", "Material-UI"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="text-center mb-5">My Projects</h2>
        <div className="row">
          {projects.map(project => (
            <div key={project.id} className="col-md-4 mb-4">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;