import React from 'react';
import './about-us.css';

function AboutUs() {
  return (
    <div class="about-us-container">
    <img src="./images/about-us/about-up-bg.png" alt=""/>

    <div class="about-us-desc">
      <p class="about-us-desc-heading">Experts in marine technology, engineering, and consultation</p>

      <p>The team members exposure at IIT Madras for a decade in the fields of hydrodynamic testing, validation of
        designs, consulting for shipyards and boat builders, design approvals, and product development related to
        defense application for powering of amphibious vehicles brings in invaluable comprehensive professional
        resource.</p>

      <a class="learn-more" href='#learnmore'>Learn More</a>
    </div>
  </div>
  );
}

export default AboutUs;