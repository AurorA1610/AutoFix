import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2) {
            alert('Your Password did not match');
            return;
        }
        registerUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }

    return (
        <Container sx={ { mt: 5 } }>
            <Grid container spacing={2}>
                <Grid item xs={ 12 } md={ 6 }>
                    <Typography variant="h3" gutterBottom>
                        Register
                    </Typography>

                    { !isLoading && <form onSubmit={ handleLoginSubmit } style={{ marginTop: 24, marginBottom: 24 }}>
                        <TextField
                            sx={ { width: "75%", m: 1 } }
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onChange={ handleOnChange }
                            variant="standard" />

                        <TextField
                            sx={ { width: "75%", m: 1 } }
                            id="standard-basic"
                            label="Your Password"
                            name="password"
                            onChange={ handleOnChange }
                            type="password"
                            variant="standard" />

                        <TextField
                            sx={ { width: "75%", m: 1 } }
                            id="standard-basic"
                            label="Confirm Password"
                            name="password2"
                            onChange={ handleOnChange }
                            type="password"
                            variant="standard" />

                        <Button
                            sx={ { width: "75%", m: 1 } }
                            type="submit"
                            color="warning"
                            variant="contained"
                        >Register</Button>
                        
                        <NavLink
                            style={ { textDecoration: "none" } }
                            to="/login">
                            <Button variant="text" color="warning">Already Registered? Please Login</Button>
                        </NavLink>
                    </form> }
                    {
                        isLoading && <CircularProgress sx={ { m: 3 } } />
                    }
                    {
                        user?.email && <Alert severity="success">Registered Successfully</Alert>
                    }
                    {
                        authError && <Alert severity="error">{ authError }</Alert>
                    }
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <img style={ { width: '100%' } } src="https://i.ibb.co/C9YDZSP/login.jpg" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;