import React from 'react';

import { Link } from 'react-router-dom';

import './Navigation.css'

function Navigation () {
    return (
        <div id="navBar">
            <Link class="link" to="/">
                Home
            </Link>
            <Link class="link" to="/signUp">
                Sign Up
            </Link>
            <Link class="link" to="/preferences">
                Preferences
            </Link><Link class="link" to="/time">
                Time
            </Link>
        </div>
    );
}

export default Navigation;