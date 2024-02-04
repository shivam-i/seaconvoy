  import React from 'react';
  import Card from '../../Shared/Card';
  import CardsContainer from '../../Shared/CardsContainer';
  import './about-us.css';

  function AboutUs() {
    return (
      <CardsContainer>

        <Card
          bgImage="./images/home-page/about-us/about-us-bg.png"
        ></Card>
        <Card
          
        >
          <h1 className='card-content-aboutus'>Experts in marine technology, engineering, and consultation</h1>
          <div className='card-content-aboutus'>
          <p>The team members' exposure at IIT Madras for a decade in the fields of hydrodynamic testing, validation of
            designs, consulting for shipyards and boat builders, design approvals, and product development related to
            defense application for powering of amphibious vehicles brings in invaluable comprehensive professional
            resource.</p>
          <div className= 'card-content-learnmore'>
          <a  href="#learnmore">Learn More</a>
          </div>
          </div>
        </Card>
      </CardsContainer>
    );
  }

  export default AboutUs;
