import React, { useState } from 'react';
import axios from 'axios';

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [credits, setCredits] = useState(0);

  const handleCreateCourse = () => {
    axios.post('/api/courses', { title, description, credits })
      .then(response => {
        alert('Course created successfully!');
        setTitle('');
        setDescription('');
        setCredits(0);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Create a New Course</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Credits:
          <input type="number" value={credits} onChange={(e) => setCredits(Number(e.target.value))} />
        </label>
        <br />
        <button onClick={handleCreateCourse}>Create Course</button>
      </form>
    </div>
  );
};

export default CreateCourse;
