import React from 'react';
import Card from '../../Shared/Card';
import CardsContainer from '../../Shared/CardsContainer';

function ExampleComponent() {
  return (
    <CardsContainer>

      <Card
        bgImage="./images/home-page/about-us/about-us-bg.png"
      ></Card>
      <Card
        heading="Experts in marine technology, engineering, and consultation"
      >
        <p>The team members' exposure at IIT Madras for a decade in the fields of hydrodynamic testing, validation of
          designs, consulting for shipyards and boat builders, design approvals, and product development related to
          defense application for powering of amphibious vehicles brings in invaluable comprehensive professional
          resource.</p>
        <a href="#learnmore">Learn More</a>
      </Card>
    </CardsContainer>
  );
}

export default ExampleComponent;
