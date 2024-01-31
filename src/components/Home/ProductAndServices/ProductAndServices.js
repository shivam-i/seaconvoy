import React from 'react';
import './product-and-services.css';
import Card from '../../Shared/Card'; 
import CardsContainer from '../../Shared/CardsContainer'; 

function ProductAndServices() {
  return (
    <div className="product-and-services-container">

    <img src="./images/home-page/prod-serv/prod-serv-heading.svg" alt="" width="1000px"/>

    <CardsContainer>
      <Card
      bgImage='./images/home-page/prod-serv/prod-improv-heading.svg'>
        <p><span><b>Design and indenisation</b></span> of waterjet propulsion system, electric popped propulsion system,
          hydraulic steering gear system for marine vehicles such as ships, amphibious vehicles, underwater vehicles.
        </p>
      </Card>
      <Card
      bgImage='./images/home-page/prod-serv/prod-improv-bg.png'>

      </Card>
    </CardsContainer>
    
    </div>
  );
}

export default ProductAndServices;
