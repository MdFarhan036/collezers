import React, { useState } from "react";
import Slider from "react-slick";
import { TestimonialData } from "../Data/SData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testiImg from "../../assets/testimonial/quotes.png";
import { TestiCard } from "./TestiCard";
export const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const [testiData, setTestiData] = useState(TestimonialData);
  return (
    <div className="testimonial-area">
      <div className="testimonial-container">
        <div className="testi-title">
          <h2>
            What Students
            <br />
            Think and Say About{" "}
            <span className="down-mark-line">Collezers</span>
          </h2>
        </div>
        <div className="swiper-container">
          <Slider {...settings}>
            {testiData.map((item) => (
              <TestiCard key={item.id} item={item} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="testimonial-pagination text-center"></div>
    </div>
  );
};
