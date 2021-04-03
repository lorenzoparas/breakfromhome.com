import React from 'react';

import useStyles from './styles';

function Home () {
    const classes = useStyles();
    return (
        <div id="mainPage" class={classes.mainPage}>
        <div id="text" class={classes.text}>
            <h1>Scheduling website</h1>
        </div> 
        <div>
            <a href="/signUp">
                <button> Sign Up </button>
            </a>
        </div>
        <div>
            <a href="/login">
                <button> Login </button>
            </a>
        </div>
        <div>
            <a href="/websitePreferences"> 
                <button> Preferences </button>
            </a>
        </div>
        <div>
            <a href="/timePreferences">
                <button> Time </button>
            </a>
        </div>
    </div>
    );
}

export default Home;
