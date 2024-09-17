// src/components/Footer.js
import React from 'react';
import { Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <footer style={{ marginTop: '20px', padding: '20px', textAlign: 'center', backgroundColor: '#f1f1f1' }}>
            <Typography variant="body2">
                <Link href="#" color="inherit">About</Link> |
                <Link href="#" color="inherit">Advertising</Link> |
                <Link href="#" color="inherit">Business</Link> |
                <Link href="#" color="inherit">How Search Works</Link>
            </Typography>
        </footer>
    );
};

export default Footer;