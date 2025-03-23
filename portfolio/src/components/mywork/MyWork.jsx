import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';
import BorderBox from '../border-box/BorderBox';
const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>Work Experience</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        <BorderBox />
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="show-more" />
      </div>
    </div>
  );
};

export default MyWork;
