import React from 'react';

import useStyles from './styles';

function Preferences () {
    const [websiteInputs, setWebsiteInputs] = React.useState(['']);

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

    return (
        <div id='preferences-container'>
            <div id='favourite-Websites'>
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
