import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className="container">
      <div className="parent">
        <div className="card">
          <div className="content-box">
            <h1 className="card-title">Back End Tech</h1>
            <p className="card-content">
              JAVA | JAVA8 | DSA | JavaScript | Spring | SpringBoot | NodeJS
            </p>
            <span className="see-more">see more</span>
          </div>
        </div>
      </div>
      <div className="parent card2">
        <div className="card">
          <div className="content-box">
            <h1 className="card-title">Front End Tech</h1>
            <p className="card-content">
              ReactJS | NextJS | HTML | CSS | Tailwind CSS | Framer Motion |
              Aceternity UI
            </p>
            <span className="see-more">see more</span>
          </div>
        </div>
      </div>
      <div className="parent card3">
        <div className="card">
          <div className="content-box">
            <h1 className="card-title">Databases</h1>
            <p className="card-content">SQL | MongoDB</p>
            <span className="see-more">see more</span>
          </div>
        </div>
      </div>
      <div className="parent card4">
        <div className="card">
          <div className="content-box">
            <h1 className="card-title">Miscellaneous</h1>
            <p className="card-content">
              Docker | Redis | GitHub | TypeScript | Junit | Joi | Linux(Basics)
            </p>
            <span className="see-more">see more</span>
          </div>
        </div>
      </div>
      <div className="parent card5">
        <div className="card">
          <div className="content-box">
            <h1 className="card-title">Full Stack</h1>
            <p className="card-content">M E R N</p>
            <span className="see-more">see more</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
