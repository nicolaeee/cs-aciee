import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'
function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="/images/photo_one.jpg" alt="slide 1" />
      </div>
      <div>
        <img src="/images/photo_two.jpg" alt="slide 2" />
      </div>
      <div>
        <img src="/images/photo_three.jpg" alt="slide 3" />
      </div>
      <div>
        <img src="/images/photo_fourth.jpg" alt="slide 4" />
      </div>
      <div>
        <img src="/images/photo_fifth.jpg" alt="slide 5" />
      </div>
      <div>
        <img src="/images/photo_seven.jpg" alt="slide 6" />
      </div>
    </Slider>
  );
}

export default Carousel;
