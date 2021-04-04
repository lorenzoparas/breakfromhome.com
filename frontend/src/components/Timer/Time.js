import React from 'react';
import { Typography, Container, Box } from '@material-ui/core';

export default class Time extends React.Component {
    twoDigits(num) {
      return num > 9 ? "" + num : "0" + num;
    }
  
    convertToHhMmSs(seconds) {
      const h = this.twoDigits(Math.floor(seconds / 3600));
      const m = this.twoDigits(Math.floor((seconds % 3600) / 60));
      const s = this.twoDigits(Math.floor(seconds % 3600 % 60));
      return `${h}:${m}:${s}`;
    };
  
    render() {
      let workTime = 'Get to work! 💻'
      let breakTime = document.createElement('div');
      breakTime.appendChild(document.createTextNode('Break Time'));
      var remainingTime = this.convertToHhMmSs(this.props.seconds);
      var activeTimer = this.props.active === 'workTime' ? workTime : breakTime;
  
      return (
        <Container>
          <Typography variant="h2">{activeTimer}</Typography>
            <Typography variant="h3" style={{ marginTop: '0.5em' }}><span style={{ border: '1px solid grey', borderRadius: '2em', padding: '15px 15px 10px 15px'}}>{remainingTime}</span></Typography>
        </Container>
      )
    }
  }