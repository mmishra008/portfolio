import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img src={profile_img} alt="profile_image" className="prof_img" />
      <h1>
        <span>I'm Madhur Mishra,</span> full stack developer based in Noida
        India
      </h1>
      <p>
        I am a Software developer{'(Full stack developer)'} from Noida UP India,
        with 3yr+ experience as software developer in Xapotech Systems Noida UP,
        and 7yr+ experience in teaching{'(As HOD,ACS)'} in GCRG Memorial Trust
        Group of Institution Lucknow.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href="Madhur-resume.pdf" download="Madhur-resume.pdf">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
