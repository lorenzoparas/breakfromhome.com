import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    btnLogin: {
      position: 'relative',
      right: '1em',
      alignItems: 'center',
      verticalAlign: 'middle',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    navButtons: {
      position: 'absolute',
      right: '1em'
    }
}));