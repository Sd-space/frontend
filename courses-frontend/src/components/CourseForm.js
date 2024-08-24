import React, { useState } from 'react';
import { createCourse } from '../api';

const CourseForm = () => {
    const [title, setTitle] = useState('');
    const [courseCode, setCourseCode] = useState(''); // Changed 'code' to 'courseCode'
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const course = {
            title,
            course_code: courseCode, // Adjusted to match the expected parameter in createCourse
            description,
        };
        await createCourse(course);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Course Title" required />
            <input type="text" value={courseCode} onChange={(e) => setCourseCode(e.target.value)} placeholder="Course Code" required />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Course Description" required />
            <button type="submit">Add Course</button>
        </form>
    );
};

export default CourseForm;
