


import React, { useEffect, useState } from 'react';
import { fetchReviews, deleteReview } from '../services/api';
import ReviewCard from './ReviewCard';
import AddReview from './AddReview';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    const loadReviews = async () => {
        try {
            const reviewsData = await fetchReviews();
            setReviews(reviewsData);
        } catch (err) {
            setError("Failed to load reviews.");
        }
    };

    useEffect(() => {
        loadReviews();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteReview(id);
            loadReviews();
        } catch (error) {
            console.error('Error deleting review:', error);
        }
    };

    return (
        <div className="reviews-container">
            <h1>Your Reviews</h1>
            {error && <p className="error-message">{error}</p>}
            <AddReview onReviewAdded={loadReviews} />
            {reviews.length > 0 ? (
                reviews.map(review => (
                    <ReviewCard key={review.id} review={review} onDelete={handleDelete} />
                ))
            ) : (
                <p>No reviews available.</p>
            )}
        </div>
    );
};

export default Reviews;