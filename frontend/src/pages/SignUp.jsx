import React from 'react';

import './SignUp.css';

function SignUp () {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    const printDetails = () => {
        console.log(username, password, email);
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
            <button id='create-account' onClick={printDetails}>Create An Account</button>
        </div>
    );
}

export default SignUp;
