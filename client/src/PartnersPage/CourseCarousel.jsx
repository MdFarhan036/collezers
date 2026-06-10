import React from "react";
import { Link } from "react-router-dom";

export const CourseCarousel = ({
  item: {
    courseimage,
    coursestitle,
    coursesname,
    coursesdescription,
    coursescardbutton,
  },
}) => {
  return (
    <div className="course-cont">
      <img className="course-image" src={courseimage} alt="product image" />
      <div className="course__content">
        <h3 className="course__title">{coursestitle}</h3>
        <h5 className="course__name">{coursesname}</h5>
        <p className="course__descr">{coursesdescription}</p>
        <a className="course__button">
          <Link to="/exploreprograms">
            {coursescardbutton}
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </a>
      </div>
    </div>
  );
};
