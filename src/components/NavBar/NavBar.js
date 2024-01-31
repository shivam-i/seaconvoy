import React from 'react';
import './nav-bar.css';

function NavBar() {
  return (
    <nav className="nav-bar">
      <img className="nav-bar-logo" src="./images/logo.png" alt="website-logo" />
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">Tools</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Gallery</a></li>
        <li><a href="/">Services</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
