import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import login from '../../../../images/login.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const Register = () => {
    const { user, registerUser, isLoading, authError } = useAuth();
    const [loginData, setLoginData] = useState({})
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Password not match');
            return
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={6} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Registar
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            type="email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        <br />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Confirm Password"
                            type="password"
                            name="password2"
                            onChange={handleOnChange}
                            variant="standard" />
                        <br />

                        <Button type="submit" sx={{ width: '75%', m: 1 }} variant="contained">Register</Button>
                        <NavLink to='/login' style={{ textDecoration: 'none' }}>
                            <Button variant="text" >Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">Registar successfully created</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }

                </Grid>
                <Grid item xs={6} md={6}>
                    <img style={{ width: '100%' }} src={login} alt=""></img>
                </Grid>

            </Grid>
        </Container>
    );
};
export default Register;