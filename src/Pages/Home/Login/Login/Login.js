
import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import login from '../../../../images/login.png';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, signInWithGoogle, authError, isLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const haldleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={6} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
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

                            <Button type="submit" sx={{ width: '75%', m: 1 }} variant="contained">Login</Button>
                            <NavLink to='/register' style={{ textDecoration: 'none' }}>
                                <Button variant="text" >New User? Please Register</Button>
                            </NavLink>
                            {
                                isLoading && <CircularProgress />
                            }
                            {
                                user?.email && <Alert severity="success">Login successfully </Alert>
                            }
                            {
                                authError && <Alert severity="error">{authError}</Alert>
                            }
                        </form>}
                        <p>--------------------------</p>
                        <Button onClick={haldleGoogleSignIn} variant="contained">Google SignIn</Button>

                    </Typography>
                </Grid>
                <Grid item xs={6} md={6}>
                    <img style={{ width: '100%' }} src={login} alt=""></img>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;