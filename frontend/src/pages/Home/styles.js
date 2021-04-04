
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainPage: {
    backgroundcolor: 'rgb(85, 39, 146)',
  },
  text: {
    color: 'white',
  },
  // Naviation styling
  navBar: {
    position: 'fixed',
  },
  logo: {
    
  }, 
  rego: {

  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    bottom: 0,
  },
}));