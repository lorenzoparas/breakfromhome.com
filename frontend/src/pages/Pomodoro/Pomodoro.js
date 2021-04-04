import React, { useState } from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import Timer from '../../components/Timer/Timer';
import Navigation from '../Navigation/Navigation';
import useStyles from '../Pomodoro/style';

const Pomodoro = () => {

    const classes = useStyles();
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlaying = (e) => {
        e.preventDefault();
    }

    return (
        <React.Fragment>
            <Navigation align='center'/>
        <Grid container align="center" justify="center" direction="column" className={classes.fix}>
                <Typography variant="h1" color="primary">Pomodoro Timer</Typography>
                <Timer/>
        </Grid>
        </React.Fragment>
    );
};

export default Pomodoro;