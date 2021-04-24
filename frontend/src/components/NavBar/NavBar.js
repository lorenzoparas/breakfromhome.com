import React from 'react';
import { Typography, AppBar, Toolbar, Button, IconButton } from '@material-ui/core/';
import icon from '../../images/BitsGiggles.png';

import useStyles from './styles';

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton href="/home">
          <img alt="logo" src={icon} height={30} width={30} />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap>
          BreakFromHome
        </Typography>
        <Button className={classes.btnLogin} href="/login" color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;