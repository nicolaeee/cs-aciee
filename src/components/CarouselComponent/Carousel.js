import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>Slide 1</h3>
        <img className='img-slider' src="/images/photo_two.jpg" alt="slide 1" />
      </div>
      <div>
        <h3>Slide 2</h3>
        <img className='img-slider' src="/images/photo_one.jpg" alt="slide 2" />
      </div>
      <div>
        <h3>Slide 3</h3>
        <img className='img-slider' src="/images/photo_three.jpg" alt="slide 3" />
      </div>
      <div>
        <h3>Slide 4</h3>
        <img className='img-slider' src="/images/photo_fourth.jpg" alt="slide 4" />
      </div>
      <div>
        <h3>Slide 5</h3>
        <img className='img-slider' src="/images/photo_fifth.jpg" alt="slide 5" />
      </div>
    </Slider>
  );
}


export default Carousel