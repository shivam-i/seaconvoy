import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className='footer-logo-social'>
          <img src="./images/home-page/footer/logo.png" alt="Company Logo" className="footer-logo" />

          <div className="footer-social">
            <div>
            <img src="./images/home-page/footer/Follow Us.png" alt="" className="contact-us"/>
            </div>
            <div className='socials'>
            <a href="./images/home-page/footer/Facebook.png"><img src="./images/home-page/footer/Facebook.png" alt="Facebook" /></a>
            <a href="./images/home-page/footer/Instagram Circle.png"><img src="./images/home-page/footer/Instagram Circle.png" alt="Instagram" /></a>
            <a href="./images/home-page/footer/TwitterX.png"><img src="./images/home-page/footer/TwitterX.png" alt="Twitter" /></a>
            </div>
        </div>
      </div>

        <div className="footer-nav">
          <a href="/tools">Tools</a>
          <a href="/about">About</a>
          <a href="/gallery">Gallery</a>
          <a href="/services">Services</a>
        </div>

       

        <div className="footer-partner">
            <img src="./images/home-page/footer/Contact Us.png" alt="" className="contact-us"/>
          <img src="./images/home-page/footer/Partner.png" alt="" className="partner-title" />
          <img src="./images/home-page/footer/Partner-logo 1.png" alt="" className="partner-logo" />
        </div>

       
      </div>

      
      <div className="footer-bottom">
        
        
        <div className="footer-copy">
          © 2024 Seaconvoy. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
