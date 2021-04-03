import React from 'react';
import Home from './pages/Home/home.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import Preferences from './pages/Preferences/Preferences.jsx';
import TimePreferences from './pages/TimePreferences/TimePreferences.jsx';
import Login from './pages/Login/Login.jsx';
import Break from './pages/Break.jsx';

import {
    Route,
    Switch,
} from 'react-router-dom';

function Body () {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/signup">
                <SignUp/>
            </Route>
            <Route path="/websitePreferences">
                <Preferences/>
            </Route>
            <Route path="/timePreferences">
                <TimePreferences/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path='/break'>
                <Break/>
            </Route>
        </Switch>
    );
}

export default Body;
