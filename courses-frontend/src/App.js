import React from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import CourseInstanceForm from './components/CourseInstanceForm';
import CourseInstanceList from './components/CourseInstanceList';

function App() {
  return (
    <div className="App">
      <h1>Course Management System</h1>
      <CourseForm />
      <CourseInstanceForm />
      <CourseList />
      <CourseInstanceList />
    </div>
  );
}

export default App;
