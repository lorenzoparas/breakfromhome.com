import React from 'react';

import './Home.css';



function Home () {
    return (
        <div id="mainPage">
            <div id="text">
                <h1>Scheduling website</h1>
            </div> 
            <div>
                Sign up
                <div>
                <a href="/signUp">
                    <button> Sign Up </button>
                </a>
                </div>
            </div>
            <div>
                <a href="/preferences"> 
                    <button> Preferences </button>
                </a>
            </div>
            <div>
                <a href="/time">
                    <button> Time </button>
                </a>
            </div>
        </div>
    );
}

export default Home;