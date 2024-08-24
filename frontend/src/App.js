// frontend/src/App.js
import React from 'react';
import Courses from './components/Courses';
import CreateCourse from './components/CreateCourse';
import CreateCourseInstance from './components/CreateCourseInstance';
import CourseInstanceList from './components/CourseInstanceList';

function App() {
  return (
    <div className="App">
      <Courses />
      <CreateCourse />
      <CreateCourseInstance />
      <CourseInstanceList />
    </div>
  );
}

export default App;
