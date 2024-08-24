import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CourseInstanceList = ({ year, semester }) => {
  const [instances, setInstances] = useState([]);
  const [selectedInstance, setSelectedInstance] = useState(null);

  useEffect(() => {
    axios.get(`/api/instances/${year}/${semester}`)
      .then(response => setInstances(response.data))
      .catch(error => console.error(error));
  }, [year, semester]);

  const handleViewDetails = (courseId) => {
    axios.get(`/api/instances/${year}/${semester}/${courseId}`)
      .then(response => setSelectedInstance(response.data))
      .catch(error => console.error(error));
  };

  const handleDeleteInstance = (courseId) => {
    axios.delete(`/api/instances/${year}/${semester}/${courseId}`)
      .then(() => setInstances(instances.filter(instance => instance.course.id !== courseId)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Course Instances - {year} Semester {semester}</h1>
      <ul>
        {instances.map(instance => (
          <li key={instance.course.id}>
            {instance.course.title} - Instructor: {instance.instructor}
            <button onClick={() => handleViewDetails(instance.course.id)}>View Details</button>
            <button onClick={() => handleDeleteInstance(instance.course.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {selectedInstance && (
        <div>
          <h2>Course Instance Details</h2>
          <p>Title: {selectedInstance.course.title}</p>
          <p>Year: {selectedInstance.year}</p>
          <p>Semester: {selectedInstance.semester}</p>
          <p>Instructor: {selectedInstance.instructor}</p>
        </div>
      )}
    </div>
  );
};

export default CourseInstanceList;
