import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Booking from '../Booking/Booking';


const timeSlot = [
    {
        id: 1,
        name: 'Teeth Orthodontrics',
        time: '8am - 9am',
        space: '10 spaces avaiable'

    },
    {
        id: 2,
        name: 'Cosmetric Destriy',
        time: '8am - 9am',
        space: '12 spaces avaiable'

    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '8am - 9am',
        space: '10 spaces avaiable'

    },
    {
        id: 4,
        name: 'Carvity Protection',
        time: '8am - 9am',
        space: '15 spaces avaiable'

    },
    {
        id: 5,
        name: 'Teeth Orthodontrics',
        time: '8am - 9am',
        space: '10 spaces avaiable'

    },
    {
        id: 6,
        name: 'Teeth Orthodontrics',
        time: '8am - 9am',
        space: '10 spaces avaiable'

    }
]

const AvailableAppointment = ({ date }) => {
    return (
        <Container>

            <Typography variant="h5" sx={{ color: 'info.main' }} gutterBottom component="div">
                Available Appointment on {date.toDateString()}
            </Typography>
            <Grid container spacing={2}>

                {
                    timeSlot.map(slot => <Booking
                        key={slot.id}
                        slot={slot}
                        date={date}
                    ></Booking>)
                }

            </Grid>
        </Container>

    );
};

export default AvailableAppointment;