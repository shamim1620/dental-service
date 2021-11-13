import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/user/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true)
                }
            })
        e.preventDefault()
    }

    return (
        <div>
            <h3>Make an Admin</h3>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '60%', m: 1 }}
                    id="outlined-size-small"
                    level="email"
                    type="email"
                    onBlur={handleOnBlur}
                    size="small"
                />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Admin add successfully </Alert>}
        </div>
    );
};

export default MakeAdmin;