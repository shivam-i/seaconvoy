import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import SeaconvoyDesc from './components/SeaconvoyDesc/SeaconvoyDesc';
import CustomersScroller from './components/CustomersScroller/CustomersScroller';
import ProductAndServices from './components/ProductAndServices/ProductAndServices';
import AboutUs from './components/AboutUs/AboutUs';
import './App.css';


function App() {
  return (
    <div>
      <HeroSection />
      <SeaconvoyDesc />
      <CustomersScroller />
      <ProductAndServices />
      <AboutUs/>
    </div>
  );
}

export default App;
