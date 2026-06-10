import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    name: 'Course 1',
    description: 'Description for Course 1',
    specializations: ['Specialization 1', 'Specialization 2', 'Specialization 3', 'Specialization 4', 'Specialization 5'],
  },
  // Define data for other courses
];

const CoursePage = ({ match }) => {
  const course = courses.find(course => course.id.toString() === match.params.id);
  
  return (
    <div>
      <h2>{course.name}</h2>
      <p>{course.description}</p>
      <h3>Specializations:</h3>
      <ul>
        {course.specializations.map((specialization, index) => (
          <li key={index}>
            <Link to={`${match.url}/${index + 1}`}>{specialization}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SpecializationPage = ({ match }) => {
  const course = courses.find(course => course.id.toString() === match.params.id);
  const specialization = course.specializations[parseInt(match.params.specId) - 1];
  
  return (
    <div>
      <h2>{specialization}</h2>
      {/* Render specialization content here */}
    </div>
  );
};

const Specialization = () => {
  return (
    <Router>
      <div>
        <h1>Course App</h1>
        <Routes>
          <Route path="/course/:id/:specId" component={SpecializationPage} />
          <Route path="/course/:id" component={CoursePage} />
          <Route path="/" render={() => (
            <ul>
              {courses.map(course => (
                <li key={course.id}>
                  <Link to={`/course/${course.id}`}>{course.name}</Link>
                </li>
              ))}
            </ul>
          )} />
        </Routes>
      </div>
    </Router>
  );
};

export default Specialization;
