// // src/SpecializationPage.js
// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import data from './data';

// const SpecializationPage = () => {
//   const { courseId, specialization } = useParams();
//   const course = data.courses.find(course => course.id.toString() === courseId);

//   if (!course) {
//     return <div>Course not found</div>;
//   }

//   const specializationDetails = course.details.specialization.find(spec => spec === specialization);

//   if (!specializationDetails) {
//     return <div>Specialization not found</div>;
//   }

//   return (
//     <div>
//       <h1>{specialization} Specialization</h1>
//       <p>Details about {specialization} in {course.name} course.</p>
//       <Link to={`/course/${course.id}`}>Back to {course.name} Details</Link>
//       <br />
//       <Link to="/">Back to Courses</Link>
//     </div>
//   );
// };

// export default SpecializationPage;
