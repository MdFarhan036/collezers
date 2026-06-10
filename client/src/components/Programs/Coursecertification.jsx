import React from "react";
import { Link } from "react-router-dom";

export const Coursecertification = ({ item: { id, title } }) => {
  return (
    <div className="course-box">
      <Link to={`/CertificationCourse/${id}`} className="blogItem-link">
        <i className="fa-solid fa-user-graduate"></i>
        <p>{title}</p>
      </Link>
    </div>
  );
};
