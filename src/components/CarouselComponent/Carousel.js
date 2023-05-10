import React, { useState } from "react";

const slides = [
  {
    image: "https://via.placeholder.com/400x200",
    caption: "Slide 1",
  },
  {
    image: "https://via.placeholder.com/400x200",
    caption: "Slide 2",
  },
  {
    image: "https://via.placeholder.com/400x200",
    caption: "Slide 3",
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function goToNextSlide() {
    setCurrentIndex((currentIndex + 1) % slides.length);
  }

  function goToPrevSlide() {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  }

  const currentSlide = slides[currentIndex];

  return (
    <div className="carousel">
      <img src={currentSlide.image} alt={currentSlide.caption} />
      <div className="caption">{currentSlide.caption}</div>
      <button onClick={goToPrevSlide}>Previous</button>
      <button onClick={goToNextSlide}>Next</button>
    </div>
  );
}

export default Carousel;
