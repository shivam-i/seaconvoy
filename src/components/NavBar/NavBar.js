import React, { useState } from 'react';
import './nav-bar.css';

function NavBar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <nav className="nav-bar">
      <img className="nav-bar-logo" src="./images/logo.png" alt="website-logo" />
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isMenuVisible ? 'visible' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/Tools">Tools</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Gallery">Gallery</a></li>
        <li><a href="/Services">Services</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
