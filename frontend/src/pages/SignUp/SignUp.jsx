import React from 'react';
import { createUser } from '../../../../backend/controllers/users';

import './SignUp.css';

function SignUp () {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    const printDetails = () => {
        console.log(username, password, email);
    }

    const clear = () => {
        setUsername('');
        setPassword('');
        setEmail('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            username: username,
            password: password
        }   
        dispatch(createUser(userData));
        clear();
    }

    return (
        <div id='signup-container'>
            <form onSubmit={handleSubmit}>
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
                <button 
                    id='create-account' 
                    type="submit">
                    Create An Account
                </button>
            </form>
        </div>
    );
}

export default SignUp;
