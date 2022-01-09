import React from 'react';
import { Typography, AppBar, Toolbar, Button, IconButton } from '@material-ui/core/';
import icon from '../../images/logo.png';

import useStyles from './styles';

const NavBar = () => {
  const classes = useStyles();

  const logout = () => {
    sessionStorage.clear();
    window.location.href = '/';
  }

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton href="/home">
          <img alt="logo" src={icon} height={30} width={30} />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap>
          BreakFromHome
        </Typography>
        <Button className={classes.btnPreferences} href="/preferences" color="inherit">Preferences</Button>
        <Button className={classes.btnBreak} href="/break" color="inherit">Break</Button>
        <Button className={classes.btnLogout} onClick={logout} color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;