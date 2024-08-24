import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const fetchCourses = async () => {
    const response = await axios.get(`${API_URL}/courses/`);
    return response.data;
};

export const fetchCourseInstances = async (year, semester) => {
    const response = await axios.get(`${API_URL}/instances/${year}/${semester}/`);
    return response.data;
};

export const createCourse = async (course) => {
    const response = await axios.post(`${API_URL}/courses/`, course);
    return 0;
};

export const createCourseInstance = async (courseInstance) => {
    const response = await axios.post(`${API_URL}/instances/`, courseInstance);
    return 0;
};

export const deleteCourse = async (courseId) => {
    await axios.delete(`${API_URL}/courses/${courseId}/`);
};

export const deleteCourseInstance = async (courseInstanceId) => {
    await axios.delete(`${API_URL}/instances/${courseInstanceId}/`);
};
