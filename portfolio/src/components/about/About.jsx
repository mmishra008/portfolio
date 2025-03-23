import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile_img.png';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" className="title-img" />
      </div>
      <div className="about-sections">
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Full Stack Developer with over a 3yr+ of
              professional expertise in the field. Throughout my career, I have
              had the privilege of working with my team and contributing to the
              success and growth of my prestigious organization.
            </p>
            <p>
              I joined my organization as a backend engineer{' '}
              {'(Software Developer Level-1)'}, and now I am also contributing
              my knowledge and skills as a full-stack developer{' '}
              {'(Software Developer Level-2)'}. My passion for full stack
              development is not only reflected in my extensive experience but
              also in the enthusiasm and dedication I bring to each project.
            </p>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE AS SOFTWARE DEVELOPER</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>8+</h1>
          <p>YEARS OF EXPERIENCE IN TEACHING</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>7+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
