import React from 'react';
import './gallery.css';

function Gallery() {
  const images = [
    './images/home-page/prod-serv/serv-improv-bg.png',
    './images/home-page/prod-serv/serv-improv-bg.png',
    './images/home-page/prod-serv/serv-improv-bg.png',
    './images/home-page/prod-serv/serv-improv-bg.png',
    './images/home-page/prod-serv/serv-improv-bg.png',
    './images/home-page/prod-serv/serv-improv-bg.png',
    './images/home-page/prod-serv/serv-improv-bg.png',
    './images/home-page/prod-serv/serv-improv-bg.png',
    './images/home-page/prod-serv/serv-improv-bg.png',
    
  ];

  return (
    <div className="gallery-section">
      <center><img src="./images/home-page/gallery/gallery-heading.svg" alt=""></img></center>
      <center><div className="gallery-grid">
        {images.map((src, i) => (
          <div className="gallery-item" key={i}>
            <img src={src} alt={`Gallery item ${i + 1}`} width="425" height="270" />
          </div>    
        ))}
      </div>
      </center>

      <div className='sized-box'></div>
    </div>
  );
}

export default Gallery;
