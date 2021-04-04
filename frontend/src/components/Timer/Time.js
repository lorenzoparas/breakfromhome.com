import React from 'react';
import { Typography, Container } from '@material-ui/core';

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
      var remainingTime = this.convertToHhMmSs(this.props.seconds);
      var activeTimer = this.props.active === 'workTime' ? 'Work Time' : 'Break Time';
  
      return (
        <Container align="center">
          <Typography variant="h2">{activeTimer}</Typography>
          <Typography variant="h3">{remainingTime}</Typography>
        </Container>
      )
    }
  }