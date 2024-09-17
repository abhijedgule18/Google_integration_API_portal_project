// src/components/Home.js
import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const Home = () => {
    return (
        <Container style={{ textAlign: 'center', marginTop: '100px' }}>
            <Typography variant="h2" gutterBottom>
                Google
            </Typography>
            <TextField
                variant="outlined"
                placeholder="Search Google or type a URL"
                style={{ width: '60%', marginBottom: '20px' }}
            />
            <br />
            <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
                Google Search
            </Button>
            <Button variant="outlined" color="primary">
                I'm Feeling Lucky
            </Button>
        </Container>
    );
};

export default Home;