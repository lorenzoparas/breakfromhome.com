import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/BitsGiggles.png';

import useStyles from './styles';

function Home () {
    const classes = useStyles();
    return (
        // Main webpage
        <div id="mainPage" class={classes.mainPage}>
        <div id={classes.navBar}>
            <Link>
                <img id={classes.logo} src={logo}/>
            </Link>
            <Link id={classes.rego} to='/signUp'>Register</Link>
            <Link id={classes.login} to='/login'>Login</Link>
        </div>
        <div id="text" class={classes.text}>
            <h1>Maximising time for our customers busy lives</h1>
        </div> 

        {/* Content */}
        <div>
            <h3>For students</h3>
            <div>
                Join our program to get hold of your busy life and enjoy your free time whilst maintaining your habits.
            </div>
            <a href='/signUp'>
                <button>Register now</button>
            </a>
        </div>

        {/* Footnotes */}
        <div>
        </div>
    </div>
    );
}

export default Home;
