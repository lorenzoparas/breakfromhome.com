import React from 'react';
import { Typography, AppBar, Toolbar, Button, IconButton, Link } from '@material-ui/core/';
import icon from '../../images/BitsGiggles.png';

import useStyles from './styles';
import { Redirect, useHistory } from 'react-router';

const NavBar = () => {
  const classes = useStyles();
  const history = useHistory();

  const logout = () => {
    sessionStorage.clear();
    history.push('/');
  }

  return(
    <AppBar position="fixed">
        <Toolbar>
         <IconButton href="/home">
           <img src={icon} height={30} width={30}/>
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