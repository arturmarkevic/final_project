import React from 'react';

import c_001 from '../assets/mers1.png';
import c_002 from '../assets/mers2.png';
import c_003 from '../assets/mers3.png';
import c_004 from '../assets/mers4.webp';
import c_005 from '../assets/mers6.webp';


const Carousel = () => {
  return (
    <section className="bg-orange-300 py-5 px-6">
      <h1 className="text-center font-bold text-2xl mb-6"></h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={c_001} className="d-block " alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={c_002} className="d-block " alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={c_003} className="d-block " alt="Slide 3" />
        </div>
        <div className="carousel-item">
          <img src={c_004} className="d-block " alt="Slide 3" />
        </div>
        <div className="carousel-item">
          <img src={c_005} className="d-block " alt="Slide 3" />
        </div>
      </div>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
