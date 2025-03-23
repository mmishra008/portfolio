import React from 'react';
import './Skills.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Card from '../glocard/Card';

const Skills = () => {
  return (
    <div id="skills" className="services">
      <div className="service-title">
        <h1>Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <Card />
    </div>
  );
};

export default Skills;
