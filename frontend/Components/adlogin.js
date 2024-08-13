import React, { useState } from "react";
import '../Assets/CSS/Login.css';
import { Link, useNavigate } from "react-router-dom";

function ALogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = () => {
        if (email === 'roventsadmin@gmail.com' && password === 'rovents001') {
            navigate('/Dashboard');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="login-body">
            <div className="login-main">
                <h1>LOGIN</h1>
                
                <br />
                <p>Email :</p>
                <input 
                    type='text' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <br />
                <p>Password :</p>
                <input 
                    type={showPassword ? 'text' : 'password'} 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <br />
                <label className="checkbox-container">
                    <input 
                        type="checkbox" 
                        checked={showPassword} 
                        onChange={() => setShowPassword(!showPassword)} 
                    />
                    <span className="checkmark"></span>
                    Show Password
                </label>
                <br />
                {error && <p className="error-message">{error}</p>}
                <div className="ad">
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default ALogin;
