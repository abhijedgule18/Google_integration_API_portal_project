// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Google
                </Typography>
                <Button color="inherit" component={Link} to="/login">
                    Sign In
                </Button>
                <Button color="inherit">Gmail</Button>
                <Button color="inherit">Images</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;