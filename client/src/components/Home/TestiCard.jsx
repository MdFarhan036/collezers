import React from "react";

export const TestiCard = ({
  item: { id, testiImg, studentname, reviews, role },
}) => {
  return (
    <div className="swiper-slide">
      <div className="testimonial-items">
        <div className="testimonial-header">
          <div className="testimonial-title">
            <h4 className="studentname">{studentname}</h4>
            <span className="role">{role}</span>
          </div>

          <div className="testimoni-quotes">
            <img src={testiImg} alt="image not found" />
          </div>
        </div>
        <div className="testimonial-body">
          <p className="reviews">{reviews}</p>
        </div>
      </div>
    </div>
  );
};
