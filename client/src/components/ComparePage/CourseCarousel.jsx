import React from "react";
// import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export const CourseCarousel = ({ item: { id, coursesimage, coursestitle, coursesname, coursesdescription, coursescardbutton } }) => {
  return (
    <div className="mycard">
      <div className="card__image">
        <img src={coursesimage} alt="image" className="card-img" />
      </div>

      <div className="card__data">
        <h3 className="card__title">{coursestitle}</h3>
        <h4 className="card__name">{coursesname}</h4>
        <p className="card__description">{coursesdescription}</p>

        <a href={{}} className="card__button">
          {coursescardbutton} <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};
