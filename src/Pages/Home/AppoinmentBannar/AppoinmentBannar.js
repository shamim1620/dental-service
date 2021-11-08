import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const AppoinmentBannar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid style={appointmentBg} container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: '400px', marginTop: '-110px' }}
                        src={doctor} alt=""></img>
                </Grid>
                <Grid item xs={6} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    textAlign: 'left'

                }}>
                    <Box>
                        <Typography sx={{ mb: 5 }} style={{ color: '#53c2a8' }} variant='h6'>
                            Appointment
                        </Typography>
                        <Typography sx={{ mb: 5 }} style={{ color: 'white' }} variant='h4'>
                            Make the Appointment Today
                        </Typography>
                        <Typography sx={{ mb: 5 }} variant='h6' style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Why do many patients prefer scheduling appointments online? The process is often faster and it can be done during or outside of normal business hours, on a computer or mobile device.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#478f7e', color: 'white' }}> Learn more</Button>
                    </Box>

                </Grid>

            </Grid>
        </Box>
    );
};

export default AppoinmentBannar;