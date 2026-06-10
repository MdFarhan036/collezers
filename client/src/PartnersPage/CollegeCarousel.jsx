import React, { useEffect, useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export const CollegeCarousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 5000,
}) => {
  const [curr, setCurr] = useState(0);
  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <>
      <div className="image-content">
        <div
          className="image-box"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides}
        </div>
      </div>
      <button
        onClick={prev}
        className="img-slider-btn"
        aria-label="View Previous Image"
      >
        <ArrowBigLeft aria-hidden />
      </button>
      <button
        onClick={next}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <ArrowBigRight aria-hidden />
      </button>
    </>
  );
};
