import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import Calendar from '../../Shared/Calendar/Calendar';

const AppointmentHeader = ({ date, setDate }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calendar date={date} setDate={setDate}></Calendar>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: '500px' }}
                        src={chair} alt=""></img>

                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentHeader;