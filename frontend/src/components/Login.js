// src/components/Login.js
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Login.css'; // Import the CSS file

const Login = () => {
    const navigate = useNavigate(); // Initialize navigate

    const handleGoogleLogin = async (credentialResponse) => {
        // Here you would typically send credentialResponse to your backend for verification
        console.log("Google Login Success:", credentialResponse);

        // Redirect to reviews page after successful login
        navigate('/reviews');
    };

    const handleError = (error) => {
        console.error('Login failed:', error);
    };

    return (
        <div className="login-page">
            <h1>Sign In</h1>
            <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={handleError}
            />
        </div>
    );
};

export default Login;