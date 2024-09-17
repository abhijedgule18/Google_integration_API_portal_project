
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Correct path to Navbar component
import LoginPage from './components/Login'; // Correct path to LoginPage component
import Home from './components/Home'; // Correct path to Home component
import ReviewsPage from './components/ReviewsPage'; // Import the new ReviewsPage component
import AddReview from './components/AddReview';
const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/reviews" element={<ReviewsPage />} />
                <Route path="/add-review" element={<AddReview onReviewAdded={() => {}} />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
};

export default App;
