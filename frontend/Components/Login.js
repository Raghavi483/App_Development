import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import '../Assets/CSS/Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameErr, setUsernameErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);
    const [incorrectErr, setIncorrectErr] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const validateLogin = () => {
        let valid = true;

        if (username.trim().length === 0) {
            setUsernameErr(true);
            valid = false;
        } else {
            setUsernameErr(false);
        }

        if (password.trim().length === 0) {
            setPasswordErr(true);
            valid = false;
        } else {
            setPasswordErr(false);
        }

        if (valid) {
            const loginData = { username, password };
            axios.post('http://localhost:8080/login/add', loginData)
                .then(response => {
                    if (response.status === 201) {
                        // Generate session key
                        const sessionKey = `user-${new Date().getTime()}`;
                        sessionStorage.setItem('sessionKey', sessionKey);

                        // Set a timeout to clear the session after 12 hours
                        setTimeout(() => {
                            sessionStorage.removeItem('sessionKey');
                        }, 12 * 60 * 60 * 1000); // 12 hours in milliseconds

                        // Navigate to home page after successful login
                        navigate('/home');
                    } else {
                        setIncorrectErr(true);
                        alert("User Not Found");
                    }
                })
                .catch(error => {
                    setIncorrectErr(true);
                    alert("User Not Found");
                });
        }
    };

    const handleAdminLogin = () => {
        navigate('/adlogin');
    };

    const handleLogout = () => {
        // Clear session storage on logout
        sessionStorage.removeItem('sessionKey');
        navigate('/'); // Redirect to the login page
    };

    return (
        <div className="login-body">
            <div className="login-main">
                <h1>LOGIN</h1>
                {incorrectErr && <small style={{ color: 'red', textAlign: 'center' }}>Enter the correct username and password</small>}
                <br />
                <p>Username :</p>
                <input 
                    type='text' 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} />
                {usernameErr && <small style={{ color: '#d3521d' }}>Please enter your username</small>}
                <br />
                <p>Password :</p>
                <input 
                    type={showPassword ? 'text' : 'password'} 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} />
                {passwordErr && <small style={{ color: '#d3521d' }}>Please enter your password</small>}
                <br />
                <label className="checkbox-container">
                    <input 
                        type="checkbox" 
                        checked={showPassword} 
                        onChange={() => setShowPassword(!showPassword)} />
                    <span className="checkmark"></span>Show Password
                </label>
                <br />
                <button onClick={validateLogin}>Login</button>
                <p style={{ fontSize: '15px' }}>Don't have an account yet? <Link to='/register'>Register</Link></p>
                <p style={{ fontSize: '15px' }}><Link to='/adlogin'>Admin?</Link></p>
                
            </div>
        </div>
    );
}

export default Login;
