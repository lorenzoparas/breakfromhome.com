import React from 'react';
import { Typography, AppBar, Toolbar } from '@material-ui/core/';
import CameraIcon from '@material-ui/icons/PhotoCamera';

import useStyles from './styles';

const NavBar = () => {
  const classes = useStyles();

  return(
    <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            BreakFromHome
          </Typography>
          <a href="/login"><button>Login</button></a>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar;