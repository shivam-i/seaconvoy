import React from "react";
import HerosSection from "../components/HerosSection/HerosSection";
import Improv from "../components/Services/Improv/Improv";

function Services() {
    return (
      <div>
        <HerosSection imgUrl="./images/services-page/heros-section/hero-section-bg.png" titleUrl="./images/services-page/heros-section/hero-section-heading.png"/>
        <Improv />
      </div>
    );
  }
  
  export default Services;