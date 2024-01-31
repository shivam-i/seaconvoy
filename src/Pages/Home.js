import React from 'react';
import HeroSection from '../components/Home/HeroSection/HeroSection';
import SeaconvoyDesc from '../components/Home/SeaconvoyDesc/SeaconvoyDesc';
import CustomersScroller from '../components/Home/CustomersScroller/CustomersScroller';
import ProductAndServices from '../components/Home/ProductAndServices/ProductAndServices';
import AboutUs from '../components/Home/AboutUs/AboutUs';



function Home() {
  return (
    <div>
      <HeroSection />
      <SeaconvoyDesc />
      <CustomersScroller />
      <AboutUs/>
      <ProductAndServices />
      
    </div>
  );
}

export default Home;
