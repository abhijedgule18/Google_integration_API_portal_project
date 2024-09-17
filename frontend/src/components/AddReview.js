// src/components/AddReview.js
import React, { useState } from 'react';
import { createReview } from '../services/api'; // Import the createReview function
import './AddReview.css'; // Import styles for AddReview

const AddReview = ({ onReviewAdded }) => {
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [rating, setRating] = useState(5); // Default rating

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newReview = { author, content, rating };
        try {
            await createReview(newReview);
            onReviewAdded(); // Callback to refresh the reviews list
            setAuthor('');
            setContent('');
            setRating(5); // Reset after submission
        } catch (error) {
            console.error('Error adding review:', error);
        }
    };

    return (
        <div className="add-review">
            <h2>Add a Review</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <div className="rating-container">
                    <label htmlFor="rating">Rating:</label>
                    <input
                        type="number"
                        id="rating"
                        min="1"
                        max="5"
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        required
                    />
                </div>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
};

export default AddReview;