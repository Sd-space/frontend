import React, { useState } from 'react';
import { createCourseInstance } from '../api';

const CourseInstanceForm = () => {
    const [courseCode, setCourseCode] = useState(''); // Using course code instead of course ID
    const [year, setYear] = useState('');             // Year of the course instance
    const [semester, setSemester] = useState('');     // Semester of the course instance

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Creating the course instance object with course_code to match the expected format in createCourseInstance
        const courseInstance = {
           course: courseCode, // course_code to link the instance with the correct course
            year: parseInt(year, 10), // Convert year to integer
            semester: parseInt(semester, 10), // Convert semester to integer
        };

        await createCourseInstance(courseInstance);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={courseCode} 
                onChange={(e) => setCourseCode(e.target.value)} 
                placeholder="Course Code" 
                required 
            />
            <input 
                type="text" 
                value={year} 
                onChange={(e) => setYear(e.target.value)} 
                placeholder="Year" 
                required 
            />
            <input 
                type="text" 
                value={semester} 
                onChange={(e) => setSemester(e.target.value)} 
                placeholder="Semester" 
                required 
            />
            <button type="submit">Add Course Instance</button>
        </form>
    );
};

export default CourseInstanceForm;
