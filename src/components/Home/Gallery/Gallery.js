import React from 'react';
import './gallery.css';

function Gallery() {
  const images = [
    './images/home-page/gallery/Seaconvoy_010224_1.png',
    './images/home-page/gallery/Seaconvoy_010224_2.jpg',
    './images/home-page/gallery/Seaconvoy_010224_3.png',
    './images/home-page/gallery/Seaconvoy_010224_4.JPG',
    './images/home-page/gallery/Seaconvoy_010224_5.JPG',
    './images/home-page/gallery/Seaconvoy_010224_6.JPG',
    './images/home-page/gallery/Seaconvoy_010224_7.JPG',
    './images/home-page/gallery/Seaconvoy_010224_8.JPG',
    './images/home-page/gallery/Seaconvoy_010224_9.jpg',
    

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
