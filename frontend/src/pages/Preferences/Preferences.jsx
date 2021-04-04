import React from 'react';


import NavBar from '../../components/NavBarLogin/NavBarLogin';
import useStyles from './styles';
import { updateUser, getUser } from '../../actions/users';
import { useDispatch } from 'react-redux';
import { Button, Paper, TextField, Container, Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

function Preferences () {
    const classes = useStyles();
    const [websiteInputs, setWebsiteInputs] = React.useState(['']);
    const dispatch = useDispatch();

    const updateWebsite = (index, value) => {
        const newWebsiteInputs = [...websiteInputs];
        newWebsiteInputs[index] = value;
        setWebsiteInputs(newWebsiteInputs);
    }

    const addWebsite = () => {
        const newWebsiteInputs = [...websiteInputs];
        newWebsiteInputs.push('');
        setWebsiteInputs(newWebsiteInputs);
    }

    const removeWebsite = () => {
        const newWebsiteInputs = [...websiteInputs];
        newWebsiteInputs.pop();
        setWebsiteInputs(newWebsiteInputs);
    }

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const saveWebsitePreferences = async (e) => {
        e.preventDefault();
        const loggedInUserData = JSON.parse(sessionStorage.getItem('loggedInUser'));
        const newWebsiteInputs = [...websiteInputs];
        loggedInUserData['favouriteWebsites'] = newWebsiteInputs;
        dispatch(updateUser(loggedInUserData['username'], loggedInUserData));
        await sleep(1000);
        const a = dispatch(getUser(loggedInUserData['username']));
        await a.then(res => {
            console.log("FINAL USER=", res);
        });
    }

    if (sessionStorage.getItem('loggedInUser') == null) {
        return (
            <Redirect to='/'/>
        );
    } else {
        return (
            <Container maxWidth="sm">
                <Paper align="center" id="website preferences" className={classes.paper}> 
                    <NavBar/>
                    <div className={classes.container}>
                        <Typography variant="h3" className={classes.title}>Create Website List</Typography>
                        <Button fullWidth variant="contained" color="primary" onClick={addWebsite} id='add-website' className={classes.button}>Add website</Button>
                        <Button fullWidth variant="contained" color="secondary" onClick={removeWebsite} id='remove-website' className={classes.button}>Remove website</Button>
                        <Button fullWidth variant="contained" color="primary" onClick={saveWebsitePreferences} id='update-website' className={`${classes.button} ${classes.lastButton} ${classes.updatePreference}`}>Submit preferences</Button>
                        <div>
                            {websiteInputs.map((val, idx) => {
                                return(
                                    <WebsiteInput
                                        index={idx}
                                        setWebsite={updateWebsite}
                                        website={websiteInputs}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </Paper>
            </Container>
        )
    }
}

function WebsiteInput ( {index, setWebsite, website }) {
    const classes = useStyles();

    return (
        <div align="center">
            <TextField
                variant="outlined"
                type='text'
                fullWidth
                placeholder='Enter a URL. . .'
                className={classes.websiteInput}
                onChange={e => setWebsite(index, e.target.value)}
                value={website[index]}
            />
        </div>
    )
}

export default Preferences;
