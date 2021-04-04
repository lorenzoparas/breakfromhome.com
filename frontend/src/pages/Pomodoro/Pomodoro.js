import React, { useState } from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import Timer from '../../components/Timer/Timer';

const Pomodoro = () => {

    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlaying = (e) => {
        e.preventDefault();

    }

    return (
        <Container component="main" maxWidth="md">
            <Typography variant="h1">This is a test!</Typography>
            <Timer onClick={() => setIsPlaying(!isPlaying)} />
            <Button variant="contained" color="primary">Start</Button>
        </Container>
    );
};

export default Pomodoro;