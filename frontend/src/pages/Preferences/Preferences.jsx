import React from 'react';


import NavBar from '../../components/NavBarLogin/NavBarLogin';
import useStyles from './styles';
import { updateUser, getUser } from '../../actions/users';
import { useDispatch } from 'react-redux';

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

    return (
        
        <div id="website preferences"> 
            <NavBar/>
            <div className={classes.container}>
                <h1>My Favourite Websites</h1>
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
                <button onClick={addWebsite} id='add-website'>Add website</button>
                <button onClick={removeWebsite} id='remove-website'>Remove website</button>
                <button onClick={saveWebsitePreferences} id='update-website'>Update preferences</button>
            </div>
        </div>
    );
}

function WebsiteInput ( {index, setWebsite, website }) {
    const classes = useStyles();

    return (
        <div>
            <input
                type='text'
                placeholder='Enter a URL. . .'
                className={classes.websiteInput}
                onChange={e => setWebsite(index, e.target.value)}
                value={website[index]}
            />
        </div>
    )
}

export default Preferences;
