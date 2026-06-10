// src/CourseDetailsPage.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from './data';

const CourseDetailsPage = () => {
  const { id } = useParams();
  const course = data.courses.find(course => course.id.toString() === id);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <h1>{course.name} Details</h1>
      <p><strong>Scope:</strong> {course.details.scope}</p>
      <p><strong>Growth:</strong> {course.details.growth}</p>
      <h2>Specializations</h2>
      <ul>
        {course.details.specialization.map((spec, index) => (
          <li key={index}>
            <Link to={`/course/${course.id}/specialization/${spec}`}>{spec}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Back to Courses</Link>
    </div>
  );
};

export default CourseDetailsPage;
