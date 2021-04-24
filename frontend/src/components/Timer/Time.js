import React from 'react';
import { Typography, Container } from '@material-ui/core';
import { getUser } from '../../actions/users';
import { useDispatch } from 'react-redux';

let link = "";

export default class Time extends React.Component {

  twoDigits(num) {
    return num > 9 ? "" + num : "0" + num;
  };

  convertToHhMmSs(seconds) {
    const h = this.twoDigits(Math.floor(seconds / 3600));
    const m = this.twoDigits(Math.floor((seconds % 3600) / 60));
    const s = this.twoDigits(Math.floor(seconds % 3600 % 60));
    return `${h}:${m}:${s}`;
  };

  render() {
    let workTime = 'Get to work! 💻';
    let breakTime = 'Take a ';
    var remainingTime = this.convertToHhMmSs(this.props.seconds);
    var activeTimer = this.props.active === 'workTime' ? workTime : breakTime;
    let visible = this.props.active === 'workTime' ? false : true;

    return (
      <Container>
        <Typography variant="h2">
          <span>
            {activeTimer}
            <WebsiteLink remTime={remainingTime} visible={visible} />
          </span>
        </Typography>
        <Typography variant="h3" style={{ border: '1px solid grey', borderRadius: '2em', paddingTop: '10px', margin: '10px 2em 0 2em' }}>{remainingTime}</Typography>
      </Container>
    )
  };

}

function WebsiteLink({ remTime, visible }) {

  const loggedInUserData = JSON.parse(sessionStorage.getItem('loggedInUser'));
  let username = loggedInUserData['username'];
  const dispatch = useDispatch();
  const a = dispatch(getUser(username));

  if (remTime === "00:00:01") {
    a.then(res => {
      let allUrls = res['favouriteWebsites'];
      link = allUrls[Math.ceil(Math.random() * (allUrls.length - 1))];
    });
  }

  if (visible) {
    return (
      <a href={link} rel="noreferrer" target="_blank" style={{ display: 'inline' }}>break!</a>
    );
  } else {
    return (
      <a href={link} rel="noreferrer" target="_blank" style={{ display: 'none' }}>break!</a>
    );
  }

}