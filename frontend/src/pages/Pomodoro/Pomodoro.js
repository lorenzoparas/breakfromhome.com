import React from 'react';
import { Grid, Container } from '@material-ui/core';
import Timer from '../../components/Timer/Timer';
import NavBar from '../../components/NavBarLogin/NavBarLogin';
import useStyles from '../Pomodoro/style';
import { Redirect } from 'react-router-dom';

const Pomodoro = () => {

    const classes = useStyles();

    if (sessionStorage.getItem('loggedInUser') == null) {
        return (
            <Redirect to='/' />
        );
    } else {
        return (
            <React.Fragment>
                <NavBar align='center' />
                <Grid container align="center" justify="center" direction="column" className={classes.fix}>
                    <Container maxWidth="sm">
                        <Timer />
                    </Container>
                </Grid>
            </React.Fragment>
        );
    }

};

export default Pomodoro;