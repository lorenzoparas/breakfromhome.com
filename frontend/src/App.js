// import './App.css';
// import Navigation from './Navigation';
// import Body from './Body';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Reminder from './pages/Reminder.js';
import Home from './pages/Home/Home.js';
import SignUp from './pages/SignUp/SignUp.js';
import Login from './pages/Login/Login.js';
import Break from './pages/Break';
import TimePreferences from './pages/TimePreferences/TimePreferences.jsx';
import WebsitePreferences from './pages/Preferences/Preferences.jsx';
import Pomodoro from './pages/Pomodoro/Pomodoro';

import Error from './pages/Error'

function App() {
  return (
    <main>
      <Switch>
        <Route path={['/' , "/home"]} component={Home} exact/>
        <Route path='/pomodoro' component={Pomodoro} exact/> 
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
