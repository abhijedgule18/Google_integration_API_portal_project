// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Adjust based on your backend URL

// Function to fetch reviews from the API
export const fetchReviews = async () => {
    const response = await axios.get(`${API_URL}/reviews`);
    return response.data;
};

// Function to create a new review
export const createReview = async (review) => {
    const response = await axios.post(`${API_URL}/reviews`, review);
    return response.data;
};

// Function to delete a review
export const deleteReview = async (id) => {
    await axios.delete(`${API_URL}/reviews/${id}`);
};