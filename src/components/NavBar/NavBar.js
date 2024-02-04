import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.css';

function NavBar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <nav className="nav-bar">
      <Link to="/"><img className="nav-bar-logo" src="./images/logo.png" alt="website-logo" /></Link>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isMenuVisible ? 'visible' : ''}`}>

        <li><Link to="/">Home</Link></li>
        <li><Link to="/tools">Tools</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/services">Services</Link></li>

      </ul>
    </nav>
  );
}

export default NavBar;
