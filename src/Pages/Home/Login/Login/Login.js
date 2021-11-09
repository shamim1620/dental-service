
import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import login from '../../../../images/login.png';


const Login = () => {
    const [loginData, setLoginData] = useState({})
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value);
    }

    const handleLoginSubmit = e => {
        alert("loged in");
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={6} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                        <form onSubmit={handleLoginSubmit}>
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
                        </form>
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