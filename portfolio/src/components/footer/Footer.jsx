import React from 'react';
import './Footer.css';
import name_logo from '../../assets/name_logo.png';
import user_icon from '../../assets/user_icon.svg';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={name_logo} alt="footer-logo" />
          <p>
            I am a full stack developer from, India with 3+ years of experience
            in company Xapotech System
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="user-icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left"> © madhur mishra all rights</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
