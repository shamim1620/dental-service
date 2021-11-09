import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({ slot, date }) => {
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleOpenBooking = () => setOpenBooking(true);
    const handleCloseBooking = () => setOpenBooking(false);

    const { name, time, space } = slot;
    return (
        <>
            <Grid item xs={12} sm={6} md={4} >
                <Paper elevation={3} sx={{ py: 5 }} >
                    <Typography variant="h5" sx={{ color: 'info.main' }} gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        {space}
                    </Typography>
                    <Button variant="contained" onClick={handleOpenBooking} sx={{ backgroundColor: 'info.main', color: 'white' }}>Book Appointment</Button>

                </Paper>

            </Grid>
            <BookingModal
                date={date}
                slot={slot}
                openBooking={openBooking}
                handleCloseBooking={handleCloseBooking}
            ></BookingModal>
        </>

    );
};

export default Booking;