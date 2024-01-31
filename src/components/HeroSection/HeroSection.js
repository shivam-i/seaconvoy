import React from 'react';
import NavBar from '../NavBar/NavBar';
import './hero-section.css';

function HeroSection() {
  return (
    <div className="hero-section">
      <img className="hero-section-bg-pic" src="./images/home-page/hero-section/hero-section-bg.png" alt="" />
      <NavBar />
      <img className="fastest-growing-seaconvoy" src="./images/fastest-growing-seaconvoy.png" alt="" />
    </div>
  );
}

export default HeroSection;
