// src/components/ReviewCard.js
import React from 'react';
import './ReviewCard.css'; // Import styles for the review card

const ReviewCard = ({ review }) => {
    return (
        <div className="review-card">
            <h3>{review.author}</h3>
            <p>Rating: {review.rating ? review.rating : 'N/A'}</p>
            <p>{review.content}</p>
        </div>
    );
};

export default ReviewCard;