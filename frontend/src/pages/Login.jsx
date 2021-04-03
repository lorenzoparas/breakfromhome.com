import React from 'react';
import './Login.css'

function Login () {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const printDetails = () => {
        console.log(username, password);
    }

    return (
        <div id='login-container'>
            <div id='login-heading'>Login</div>
            <div className='login-username'>
                <input onChange={e => setUsername(e.target.value)}
                        placeholder='Username' 
                        type='text'
                        required
                />
            </div>
            <div className='login-password'>
                <input onChange={e => setPassword(e.target.value)}
                        placeholder='Password' 
                        type='password'
                        required
                />
            </div>
            <button id='create-account' onClick={printDetails}>Login</button>
        </div>
    );
}
export default Login;