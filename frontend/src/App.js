// import './App.css';
// import Navigation from './Navigation';
// import Body from './Body';

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// NOTE: Only authorised users should only be able to see the preferences
import Reminder from './pages/Reminder.js';
import Home from './pages/Home/Home.js';
import SignUp from './pages/SignUp/SignUp.js';
import Login from './pages/Login.js';
import Break from './pages/Break.jsx';
import TimePreferences from './pages/TimePreferences/TimePreferences.jsx';
import WebsitePreferences from './pages/Preferences/Preferences.jsx';
import Pomodoro from './pages/Pomodoro/Pomodoro';

function App() {
  return (
    <main>
      <Switch>
        {/* <Route path={['/' , "/home"]} component={Home} exact/> */}
        <Route path={['/' , "/home"]} component={Pomodoro} exact/> 
        <Route path='/reminder' component={Reminder}/>
        <Route path='/login' component={Login}/>
        <Route path='/signUp' component={SignUp}/>
        <Route path='/break' component={Break}/>
        <Route path='/timepreferences' component={TimePreferences}/>
        <Route path='/preferences' component={WebsitePreferences}/>
      </Switch>
    </main>
  );
}

export default App;
