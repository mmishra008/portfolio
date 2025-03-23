import React from 'react';
import './Project.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import ProjectCard from '../project-card/ProjectCard';

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="project-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="pro_card">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
