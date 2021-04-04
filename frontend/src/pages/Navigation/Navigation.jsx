import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core/';

import { Link } from 'react-router-dom';

import useStyles from './styles';

function Navigation () {
    const classes = useStyles();
    return (
        <AppBar id={classes.navBar}>
            <Toolbar>
            <Link className={classes.link} to='/'>
                Home
            </Link>
            <Link className={classes.link} to='/preferences'>
                Preferences
            </Link>
            <Link className={classes.link} to='/break'>
                Break
            </Link>
            </Toolbar>
        </AppBar>
    );
}

export default Navigation;