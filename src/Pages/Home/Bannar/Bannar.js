import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';


const bannarBg = {
    background: `url(${bg})`

}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Bannar = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container style={bannarBg} spacing={2} >
                <Grid item xs={12} md={5} style={verticalCenter}
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        textAlign: 'left'

                    }}>

                    <Box>

                        <Typography variant='h4' sx={{ mb: 2 }} >
                            Your New Smile Start Here
                        </Typography>
                        <Typography variant='h6' sx={{ mb: 3 }} style={{ color: 'gray', fontSize: 14, fontWeight: 300 }}>
                            Why do many patients prefer scheduling appointments online? The process is often faster and it can be done during or outside of normal business hours, on a computer or mobile device.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#478f7e', color: 'white' }}> Get Appointment</Button>
                    </Box>

                </Grid>
                <Grid item xs={12} md={7} style={verticalCenter}>
                    <img
                        style={{ width: '500px' }}
                        src={chair} alt=""></img>

                </Grid>
            </Grid>
        </Box>
    );
};

export default Bannar;