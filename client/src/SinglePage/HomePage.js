// src/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';

const HomePage = () => {
  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {data.courses.map(course => (
          <li key={course.id}>
            <Link to={`/course/${course.id}`}>{course.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
