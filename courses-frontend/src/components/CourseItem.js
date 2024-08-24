import React from 'react';
import { deleteCourse } from '../api';

const CourseItem = ({ course }) => {
    const handleDelete = async () => {
        await deleteCourse(course.id);
    };

    return (
        <li>
            <h3>{course.title} ({course.code})</h3>
            <p>{course.description}</p>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
};

export default CourseItem;
