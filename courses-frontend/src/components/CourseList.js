import React, { useEffect, useState } from 'react';
import { fetchCourses } from '../api';
import CourseItem from './CourseItem';

const CourseList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const getCourses = async () => {
            console.log('Fetching courses...'); // Simulating API call delay
            const fetchedCourses = await fetchCourses();
            setCourses(fetchedCourses);
        };
        getCourses();
    }, []);

    return (
        <div>
            <h2>Course List</h2>
            <ul>
                {courses.map((course) => (
                    <CourseItem key={course.id} course={course} />
                ))}
            </ul>
        </div>
    );
};

export default CourseList;

