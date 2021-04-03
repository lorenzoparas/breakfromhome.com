// import './App.css';
// import Navigation from './Navigation';
// import Body from './Body';

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// NOTE: Only authorised users should only be able to see the preferences
import Reminder from './pages/Reminder.js';
import Home from './pages/Home/Home.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import Login from './pages/Login/Login.jsx';
import TimePreferences from './pages/TimePreferences/TimePreferences.jsx';
import websitePreferences from './pages/Preferences/Preferences.jsx';

function App() {
  return (
    <main>
      <Switch>
        <Route path={['/' , "/home"]} component={Home} exact/>
        <Route path='/reminder' component={Reminder}/>
        <Route path='/signUp' component={SignUp}/>
      </Switch>
    </main>
  );
}

export default App;
