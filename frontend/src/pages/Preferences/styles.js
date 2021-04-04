import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
    },
    websiteInput: {
        margin: '1em 0',
        fontSize: '0.5em',
    },
    container: {
        marginTop: '8em',
    },
    paper: {
        padding: '0 1em',
    },
    title: {
        paddingTop: '0.5em',
    },
    button: {
        margin: '0.3em 0',
    },
    lastButton: {
        marginBottom: '1em',
    },
    updatePreference: {
        marginTop: '1.5em',
    }
}));
