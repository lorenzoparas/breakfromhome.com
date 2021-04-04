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
import websitePreferences from './pages/Preferences/Preferences.jsx';

function App() {
  return (
    <main>
      <Switch>
        <Route path={['/' , "/home"]} component={Home} exact/>
        <Route path='/reminder' component={Reminder}/>
        <Route path='/login' component={Login}/>
        <Route path='/signUp' component={SignUp}/>
<<<<<<< HEAD
        <Route path='/Login' component={Login}/>
=======
        <Route path='/break' component={Break}/>
>>>>>>> 1ec9d58bab83c2e76f36fec13e36ffdf126092ac
      </Switch>
    </main>
  );
}

export default App;
