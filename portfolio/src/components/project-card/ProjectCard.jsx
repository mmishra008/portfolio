import React from 'react';
import './ProjectCard.css';
import p_image from '../../assets/p_image.png';
import { project_data } from '../../assets/project_data';

const ProjectCard = () => {
  return project_data.map((project, index) => {
    return (
      <div class="p_container" key={index}>
        <div class="p_card">
          <div class="p_face p_face1">
            <div class="p_content">
              <img src={p_image} alt="" />
              <h3>{project.name}</h3>
            </div>
          </div>
          <div class="p_face p_face2">
            <div class="p_content">
              <h3>{project.p_title}</h3>
              <p>{project.tech}</p>
              <a href={project.link}>View Project</a>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default ProjectCard;
/*
<div class="p_container">
      <div class="p_card">
        <div class="p_face p_face1">
          <div class="p_content">
            <img src={p_image} alt="" />
            <h3>Project 1</h3>
          </div>
        </div>
        <div class="p_face p_face2">
          <div class="p_content">
            <p>
              Fully functional web project deployed on varcel, project includes
              JWT authentication and tech used are JavaScript, MonogoDB, Express
              ReactJS and for designing CSS, Modular CSS and Framer Motion is
              used
            </p>
            <a href="#">View Project</a>
          </div>
        </div>
      </div>
    </div>
*/
