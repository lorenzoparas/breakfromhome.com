import React from 'react';

import { Link } from 'react-router-dom';

import './Navigation.css'

function Navigation () {
    return (
        <div id='navBar'>
            <Link className='link' to='/'>
                Home
            </Link>
            <Link className='link' to='/signup'>
                Sign Up
            </Link>
            <Link className='link' to='/websitePreferences'>
                Preferences
            </Link>
            <Link className='link' to='/timePreferences'>
                Time
            </Link>
            <Link className='link' to='/login'>
                Login
            </Link>
            <Link className='link' to='/break'>
                Break
            </Link>
        </div>
    );
}

export default Navigation;