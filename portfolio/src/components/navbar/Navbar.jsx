import React, { useRef, useState } from 'react';
import './Navbar.css';
import name_logo from '../../assets/name_logo.png';
import nav_underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
const Navbar = () => {
  const [menu, setMenu] = useState('Home');
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = '0';
  };
  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  };
  window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
  });
  return (
    <div className="navbar">
      <img src={name_logo} alt="logo" className="lg-img" />
      <img
        src={menu_open}
        onClick={openMenu}
        alt="menu-mobile"
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#hero">
            <p onClick={() => setMenu('Home')}>Home</p>
          </AnchorLink>
          {menu === 'Home' ? <img src={nav_underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu('About')}>About Me</p>
          </AnchorLink>
          {menu === 'About' ? <img src={nav_underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#skills">
            <p onClick={() => setMenu('Skills')}>Skills</p>
          </AnchorLink>
          {menu === 'Skills' ? <img src={nav_underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu('Work')}>Work</p>
          </AnchorLink>
          {menu === 'Work' ? <img src={nav_underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            <p onClick={() => setMenu('Projects')}>Projects</p>
          </AnchorLink>
          {menu === 'Projects' ? <img src={nav_underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu('Contact')}>Contact</p>
          </AnchorLink>
          {menu === 'Contact' ? <img src={nav_underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
