import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainPage: {
    position: 'relative'
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: '96px'
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: '48px',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: 'calc(100vw - 96px)',
    textAlign: 'center'
  },
}));
