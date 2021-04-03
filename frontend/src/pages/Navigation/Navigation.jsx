import React from 'react';

import { Link } from 'react-router-dom';

import useStyles from './styles';

function Navigation () {
    const classes = useStyles();
    return (
        <div id={classes.navBar}>
            <Link className={classes.link} to='/'>
                Home
            </Link>
            <Link className={classes.link} to='/signup'>
                Sign Up
            </Link>
            <Link className={classes.link} to='/websitePreferences'>
                Preferences
            </Link>
            <Link className={classes.link} to='/timePreferences'>
                Time
            </Link>
            <Link className={classes.link} to='/login'>
                Login
            </Link>
            <Link className={classes.link} to='/break'>
                Break
            </Link>
        </div>
    );
}

export default Navigation;