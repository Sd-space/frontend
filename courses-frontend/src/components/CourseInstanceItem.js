import React from 'react';
import { deleteCourseInstance } from '../api';

const CourseInstanceItem = ({ instance }) => {
    const handleDelete = async () => {
        await deleteCourseInstance(instance.id);
    };

    return (
        <li>
            <h3>{instance.course.title} - {instance.year}/{instance.semester}</h3>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
};

export default CourseInstanceItem;
