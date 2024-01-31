import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import SeaconvoyDesc from './Home/SeaconvoyDesc/SeaconvoyDesc';
import CustomersScroller from './Home/CustomersScroller/CustomersScroller';
import ProductAndServices from './Home/ProductAndServices/ProductAndServices';
import AboutUs from './Home/AboutUs/AboutUs';
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
