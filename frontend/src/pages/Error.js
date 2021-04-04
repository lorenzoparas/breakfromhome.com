import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    body: {
        alignItems: 'center',
    },
    header: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    link: {
        color: "#fff",
        flexDirection: 'column',
        textAlign: 'center'
        
    }
}));

function Error() {
    const classes = useStyles();
    return (
        <div className={classes.body}>
            <h1 className = {classes.header}>Oops! No webpage found</h1>
            <Link className={classes.link} to='/'><h3>Take me home</h3></Link>
            
        </div>
    );
}

export default Error;