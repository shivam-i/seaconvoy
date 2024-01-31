import React from 'react';
import './customers-scroller.css';

function CustomersScroller() {
  return (
    <div className="our-customers-scroller">
      <img src="./images/our-customers/our-customers-heading.png" alt="our-customers" class="our-customers-heading"
      width="700px"/>

    <div class="our-customers-scroller">
      <marquee behavior="" direction="">
        <img src="./images/our-customers/iitm.png" alt=""/>
        <img src="./images/our-customers/niot.png" alt=""/>
        <img src="./images/our-customers/drdo.png" alt=""/>
        <img src="./images/our-customers/mmps.png" alt=""/>
        <img src="./images/our-customers/grse.png" alt=""/>
        <img src="./images/our-customers/sandvik.png" alt=""/>
        <img src="./images/our-customers/md.png" alt=""/>
        <img src="./images/our-customers/garware.png" alt=""/>
      </marquee>
    </div>
    </div>
  );
}

export default CustomersScroller;
