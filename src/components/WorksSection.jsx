import React from "react";
import "./WorksSection.css";
import projects from "../../data/portfolio.json";

const Works = () => {
  return (
    <section className="projects">
      <div className="container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-meta">
                  <div className="tags">
                    {project.stack.split(",").map((tag, i) => (
                      <span key={i}>{tag.trim()}</span>
                    ))}
                  </div>

                  <div className="links">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-solid fa-link"></i>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
