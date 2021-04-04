import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { AddAlert } from '@material-ui/icons';
import { createUser } from '../../actions/users';
import { useDispatch } from 'react-redux';
import { Paper } from '@material-ui/core';
import Copyright from '../../components/Copyright/Copyright';
import NavBar from '../../components/NavBar/NavBar';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(16),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  login: {
    padding: '0 2em',
  }
}));

export default function SignIn() {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const classes = useStyles();
  const dispatch = useDispatch();

  const clear = () => {
    document.getElementById('name').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirmPassword').value = '';
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  }

  const handleSubmit = async (e) => {

      e.preventDefault();
      
      if (password !== confirmPassword) {
        clear();
        alert("The two passwords don't match.");
        return;
      }

      if (username.length === 0 || password.length === 0 || confirmPassword.length === 0) {
        clear();
        alert("Invalid registration details!");
        return;
      }

      const userData = {
          "username": username,
          "password": password,
          "favouriteWebsites": [],
          "timePresets": []
      };

      dispatch(createUser(userData));
      
      clear();
  }

  return (
    <>
    <NavBar/>
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} className={classes.login}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} action='/break'>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={e => setUsername(e.target.value)}
            id="name"
            label="Your Name"
            name="name"
            autoComplete="off"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={e => setPassword(e.target.value)}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="off"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={e => setConfirmPassword(e.target.value)}
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="off"
          />
          <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          className={classes.submit}
          >
          Sign In
          </Button>          
        </form>
        <Grid container>
            <Grid item>
              <Typography variant="body1">Don't have an account?</Typography>
              <Link href='/login' variant="body2">
              <Button variant="contained" color="default" id="signup">
                  Sign Up
              </Button>
              </Link>
            </Grid>
          </Grid>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      <br/>
      </Paper>
    </Container>
    </>
  );
}