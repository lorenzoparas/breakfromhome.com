import React from 'react';
import useStyles from './styles';

function Login () {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const printDetails = () => {
        console.log(username, password);
    }
    
    const classes = useStyles();

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
            <button id='login-submit' onClick={printDetails}>Login</button>
        </div>
    );
}
export default Login;