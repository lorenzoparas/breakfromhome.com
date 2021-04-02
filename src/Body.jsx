import React from 'react';
import Home from './Home'
import SignUp from './SignUp'
import Preferences from './Preferences'

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
            <Route path="/signUp">
                <SignUp/>
            </Route>
            <Route path="/preferences">
                <Preferences/>
            </Route>
            <Route path="/time">
                This is the time sheet
            </Route>
        </Switch>
    );
}

export default Body;