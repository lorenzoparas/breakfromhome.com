
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainPage: {
    backgroundcolor: 'rgb(85, 39, 146)',
    marginTop: '40px',
  },
  text: {
    color: 'white',
  },
  // Naviation styling
  navBar: {
    position: 'fixed',
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 1),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    padding: theme.spacing(10),
    paddingTop: theme.spacing(2),
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

  },
}));