import React, { useState } from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import Timer from '../../components/Timer/Timer';
import NavBar from '../../components/NavBarLogin/NavBarLogin';
import useStyles from '../Pomodoro/style';

const Pomodoro = () => {

    const classes = useStyles();
    
    return (
        <React.Fragment>
        <NavBar/>
        <Grid container align="center" justify="center" direction="column" className={classes.fix}>
            <Typography variant="h1" color="primary">Pomodoro Timer</Typography>
            <Timer/>
        </Grid>
        </React.Fragment>
    );
};

export default Pomodoro;