import React, { useState } from 'react';
import { fetchCourseInstances } from '../api';
import CourseInstanceItem from './CourseInstanceItem';

const CourseInstanceList = () => {
    const [year, setYear] = useState('');
    const [semester, setSemester] = useState('');
    const [courseInstances, setCourseInstances] = useState([]);

    const handleFetch = async () => {
        const fetchedInstances = await fetchCourseInstances(year, semester);
        setCourseInstances(fetchedInstances);
    };

    return (
        <div>
            <h2>Course Instances</h2>
            <input type="text" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" required />
            <input type="text" value={semester} onChange={(e) => setSemester(e.target.value)} placeholder="Semester" required />
            <button onClick={handleFetch}>Fetch Course Instances</button>
            <ul>
                {courseInstances.map((instance) => (
                    <CourseInstanceItem key={instance.id} instance={instance} />
                ))}
            </ul>
        </div>
    );
};

export default CourseInstanceList;
