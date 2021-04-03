import { AddAlert } from '@material-ui/icons';
import React from 'react';
import {Link } from "react-router-dom";

function SignUp () {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    const printDetails = () => {
        console.log(username, password, email);
    }
    
    const checkPassword = (pass1, pass2) => {
        if (pass1 === pass2) {
            return;
        } else {
            alert('Passwords do not match');
        }
    }

    return (
        <div id='signup-container'>
            <div id='signup-heading'>For Students</div>
            <div className='signup-username'>
                <input onChange={e => setUsername(e.target.value)}
                        placeholder='Username' 
                        type='text'
                />
            </div>
            <div className='signup-email'>
                <input onChange={e => setEmail(e.target.value)} 
                    placeholder='Email' 
                    type='text'/>
            </div>
            <div className='signup-password'>
                <input onChange={e => setPassword(e.target.value)}
                        placeholder='Password' 
                        type='password'/>
            </div>
            <div className='signup-confirm'>
                <input onBlur={e => checkPassword(e, password)}
                        placeholder='Confirm Password' 
                        type='password'/>
            </div>
            <div id='signup-ending'>Already have an account?</div>
            <div id='signup-login'><Link to='/'>
                <button id="login-page">Login</button>
            </Link></div>
            <button id='create-account' onClick={printDetails}>Create An Account</button>
        </div>
    );
}

export default SignUp;
