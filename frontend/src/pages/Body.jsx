import React from 'react';
import Home from './Home';
import SignUp from './SignUp';
import Preferences from './Preferences';
import TimePreferences from './TimePreferences';
import Login from './Login';
import Break from './Break';

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
