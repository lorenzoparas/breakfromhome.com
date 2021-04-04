import React from 'react';
import { Typography, AppBar, Toolbar, Button, IconButton, Link } from '@material-ui/core/';
import icon from '../../images/BitsGiggles.png';

import useStyles from './styles';

const NavBar = () => {
  const classes = useStyles();

  return(
    <AppBar position="fixed">
        <Toolbar>
         <IconButton href="/home">
           <img src={icon} height={30} width={30}/>
         </IconButton>
         <Typography variant="h6" color="inherit" noWrap>
           BreakFromHome
        </Typography>
          <Button className={classes.btn} href="/" color="inherit">Home</Button>
          <Button className={classes.btn} href="/preferences" color="inherit">Preferences</Button>
          <Button className={classes.btn} href="/break" color="inherit">Break</Button>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar;