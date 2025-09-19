import React, { useState, useEffect, useRef } from "react";
import "./WorksSection.css";
import projectData from "../data/portfolio.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const filters = [
  { label: "All", value: "all" },
  { label: "Wordpress", value: "Wordpress" },
  { label: "React", value: "React" },
  { label: "Astro", value: "Astro" }
];

export default function Works() {
  const [activeFilter, setActiveFilter] = useState("all");
  const projectsRefs = useRef([]);

  const filteredProjects =
    activeFilter === "all"
      ? projectData
      : projectData.filter((project) => project.stack === activeFilter);

  useEffect(() => {
    projectsRefs.current = [];
  }, [activeFilter]);

  return (
    <section className="projects">
      <div className="container">
        {/* Filter buttons */}
        <div className="filters">
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={activeFilter === filter.value ? "filter-active" : "filter-btn"}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="projects-grid">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
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
                        <FontAwesomeIcon icon={faLink} className="icon" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} className="icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
