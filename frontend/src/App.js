// import './App.css';
// import Navigation from './Navigation';
// import Body from './Body';

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Reminder from './pages/Reminder.js';
import SignIn from './pages/SignUp.js';

function App() {
  return (
    <main>
      <Switch>
        <Route path='/' component={SignIn} exact/>
        <Route path='/reminder' component={Reminder}/>
      </Switch>
    </main>
  );
}

export default App;
