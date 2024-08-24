import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateCourseInstance = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [year, setYear] = useState(0);
  const [semester, setSemester] = useState(0);
  const [instructor, setInstructor] = useState('');

  useEffect(() => {
    axios.get('/api/courses')
      .then(response => setCourses(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleCreateInstance = () => {
    axios.post('/api/instances', {
      course: selectedCourse,
      year,
      semester,
      instructor
    })
      .then(response => {
        alert('Course instance created successfully!');
        setSelectedCourse('');
        setYear(0);
        setSemester(0);
        setInstructor('');
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Create a New Course Instance</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Course:
          <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
            <option value="">Select a course</option>
            {courses.map(course => (
              <option key={course.id} value={course.id}>{course.title}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Year:
          <input type="number" value={year} onChange={(e) => setYear(Number(e.target.value))} />
        </label>
        <br />
        <label>
          Semester:
          <input type="number" value={semester} onChange={(e) => setSemester(Number(e.target.value))} />
        </label>
        <br />
        <label>
          Instructor:
          <input type="text" value={instructor} onChange={(e) => setInstructor(e.target.value)} />
        </label>
        <br />
        <button onClick={handleCreateInstance}>Create Instance</button>
      </form>
    </div>
  );
};

export default CreateCourseInstance;
