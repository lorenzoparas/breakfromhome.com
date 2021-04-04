import React, { useState } from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import Timer from '../../components/Timer/Timer';
<<<<<<< HEAD
import NavBar from '../../components/NavBarLogin/NavBarLogin';
=======
import Navigation from '../../components/Navigation/Navigation';
>>>>>>> a32d5ba5d5209a2ba922353773a2c884a551139f
import useStyles from '../Pomodoro/style';

const Pomodoro = () => {

    const classes = useStyles();
<<<<<<< HEAD
    console.log(sessionStorage.getItem('loggedInUser'));
    return (
        <React.Fragment>
        <NavBar/>
        <Grid container align="center" justify="center" direction="column" className={classes.fix}>
            <Typography variant="h1" color="primary">Pomodoro Timer</Typography>
            <Timer/>
        </Grid>
=======

    return (
        <React.Fragment>
            <Navigation align='center'/>
            <Grid container align="center" justify="center" direction="column" className={classes.fix}>
            <Paper elevation={1} style={{ padding: "1em" }}>
                <Typography variant="h1">Pomodoro Timer</Typography>
                <Timer/>
            </Paper>
            </Grid>
>>>>>>> a32d5ba5d5209a2ba922353773a2c884a551139f
        </React.Fragment>
    );
};

export default Pomodoro;