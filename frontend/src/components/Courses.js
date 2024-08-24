import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    axios.get('/api/courses')
      .then(response => setCourses(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleViewDetails = (id) => {
    axios.get(`/api/courses/${id}`)
      .then(response => setSelectedCourse(response.data))
      .catch(error => console.error(error));
  };

  const handleDeleteCourse = (id) => {
    axios.delete(`/api/courses/${id}`)
      .then(() => setCourses(courses.filter(course => course.id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.title} - {course.credits} credits
            <button onClick={() => handleViewDetails(course.id)}>View Details</button>
            <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {selectedCourse && (
        <div>
          <h2>Course Details</h2>
          <p>Title: {selectedCourse.title}</p>
          <p>Description: {selectedCourse.description}</p>
          <p>Credits: {selectedCourse.credits}</p>
        </div>
      )}
    </div>
  );
};

export default Courses;
