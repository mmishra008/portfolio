import React from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';
import { project_data } from '../../assets/project_data';

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="service-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {project_data.map((project, index) => {
          return (
            <div key={index} className="services-format">
              <div className="services-readmore">
                <p>Read more</p>
                <img src={arrow_icon} alt="read-more" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
