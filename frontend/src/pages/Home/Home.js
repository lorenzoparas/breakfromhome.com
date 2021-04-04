import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Paper } from '@material-ui/core';
import { Redirect } from 'react-router-dom';


import NavBar from '../../components/NavBar/NavBar';
import NavBarLogin from '../../components/NavBarLogin/NavBarLogin';
import useStyles from './styles';

import Copyright from '../../components/Copyright/Copyright';

const cards = [1, 2, 3, 4];

export default function Home() {
  const classes = useStyles();
  let navBar;
  if (sessionStorage.getItem('loggedInUser') == null) {
    navBar = <NavBar/>;
  } else {
    navBar = <NavBarLogin/>;
  }
  console.log(sessionStorage.getItem('loggedInUser'))

  if (sessionStorage.getItem('loggedInUser') == null) {
    return (
        <React.Fragment>
        {navBar}
        <main className={classes.mainPage}>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Get Started
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Improve your physical and mental health whilst getting work done!
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                  <Link href='/signUp' variant='h2'>
                    <Button variant="contained" color="primary">
                      Sign Up
                    </Button>
                  </Link>
                  </Grid>
                  <Grid item>
                  <Link href='/login' variant='h2'>
                    <Button variant="outlined" color="primary">
                      I have an account
                    </Button>
                  </Link>
                  </Grid>
                </Grid>
              </div>
            </Container>
            <br/>
            <br/>
              <Typography align="center" variant="h2" gutterBottom>Our Developers</Typography>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://media.discordapp.net/attachments/827406361696403471/827475119160688660/unknown.png"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Nathan Baylon
                      </Typography>
                      <Typography>
                        Hello I am Baylon
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://media.discordapp.net/attachments/827406361696403471/827473458040274984/unknown.png"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Aryan Karwal
                      </Typography>
                      <Typography>
                        My name's Aryan, and I love to dance!
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://cdn.discordapp.com/attachments/827406361696403471/827474862305050625/unknown.png"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Carlos Larino
                      </Typography>
                      <Typography>
                        I like trains and if you want to support me in liking trains, checkout my media account
                        <a href='https://www.redbubble.com/people/Okayasart/shop'> here.</a>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://media.discordapp.net/attachments/827406361696403471/827470948684660767/unknown.png"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Ives Paras
                      </Typography>
                      <Typography>
                        I'm never hungry because I'm always Ives.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
            </Grid>
          </Container>
        </main>
          {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Hackiethon2021
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            This is a submission for Hackiethon2021
          </Typography>
          <Copyright />
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        {navBar}
        <main className={classes.mainPage}>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Hello, {JSON.parse(sessionStorage.getItem('loggedInUser'))['username']}!
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Choose a list of your favourite websites, set your work and break times and we take care of the rest!
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                  <Link href='/preferences' variant='h2'>
                    <Button variant="contained" color="primary">
                      Create my preferences
                    </Button>
                  </Link>
                  </Grid>
                  <Grid item>
                  <Link href='/break' variant='h2'>
                    <Button variant="outlined" color="primary">
                      Start my timer
                    </Button>
                  </Link>
                  </Grid>
                </Grid>
              </div>
            </Container>
            <br/>
            <br/>
              <Typography align="center" variant="h2" gutterBottom>Our Developers</Typography>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://media.discordapp.net/attachments/827406361696403471/827475119160688660/unknown.png"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Nathan Baylon
                      </Typography>
                      <Typography>
                        Hello I am Baylon
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://media.discordapp.net/attachments/827406361696403471/827473458040274984/unknown.png"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Aryan Karwal
                      </Typography>
                      <Typography>
                        My name's Aryan, and I love to dance!
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://cdn.discordapp.com/attachments/827406361696403471/827474862305050625/unknown.png"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Carlos Larino
                      </Typography>
                      <Typography>
                        I like trains and if you want to support me in liking trains, checkout my media account
                        <a href='https://www.redbubble.com/people/Okayasart/shop'> here.</a>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://media.discordapp.net/attachments/827406361696403471/827470948684660767/unknown.png"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Ives Paras
                      </Typography>
                      <Typography>
                        I'm never hungry because I'm always Ives.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
            </Grid>
          </Container>
        </main>
          {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Hackiethon2021
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            This is a submission for Hackiethon2021
          </Typography>
          <Copyright />
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}