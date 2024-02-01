import React from "react";
import HerosSection from "../components/HerosSection/HerosSection";
import FastestGrowing from "../components/About/fastest-growing/FastestGrowing";
import WhoAreWe from "../components/About/who-are-we/WhoAreWe";
import MeetTheTeam from "../components/About/MeetTheTeam/MeetTheTeam";

function About() {
    return (
      <div>
        <HerosSection imgUrl="./images/about-page/heros-section/heros-section-bg.png" titleUrl="./images/about-page/heros-section/heros-section-title.png"/>
        <FastestGrowing />
        <WhoAreWe />
        <MeetTheTeam />
      </div>
    );
  }
  
  export default About;