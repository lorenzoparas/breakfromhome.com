import React, { useState } from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import Timer from '../../components/Timer/Timer';

const Pomodoro = () => {

    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlaying = (e) => {
        e.preventDefault();
    }

    return (
        <Grid container align="center" justify="center" direction="column">
            <Typography variant="h1" color="primary">Pomodoro Timer</Typography>
            <Container>
                <Timer/>
            </Container>
        </Grid>
    );
};

export default Pomodoro;