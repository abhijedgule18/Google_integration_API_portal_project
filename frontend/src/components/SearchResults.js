// src/components/SearchResults.js
import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

const SearchResults = () => {
    const results = [
        'Result 1: Example of a search result',
        'Result 2: Another example result',
        'Result 3: More results here'
    ];

    return (
        <Container style={{ marginTop: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Search Results
            </Typography>
            <Grid container spacing={3}>
                {results.map((result, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper style={{ padding: '15px', marginBottom: '10px' }}>
                            <Typography variant="body1">{result}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default SearchResults;