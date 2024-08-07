import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Assets/CSS/Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);
    const [incorrectErr, setIncorrectErr] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const validateLogin = () => {
        let valid = true;

        // Validate email
        if (email.trim().length === 0) {
            setEmailErr(true);
            valid = false;
        } else {
            setEmailErr(false);
        }

        // Validate password
        if (password.trim().length === 0) {
            setPasswordErr(true);
            valid = false;
        } else {
            setPasswordErr(false);
        }

        // Check credentials
        if (valid) {
            const register = JSON.parse(localStorage.getItem('user'));
            if (register && (register.email !== email || register.password !== password)) {
                setIncorrectErr(true);
                alert("User Not Found");
            } else if (register) {
                setIncorrectErr(false);
                window.location.href = '/';
            }
        }
    };

    const handleAdminLogin = () => {
        navigate('/adlogin');
    };

    return (
        <div className="login-body">
            <div className="login-main">
                <h1>LOGIN</h1>
                {incorrectErr && <small style={{ color: 'red', textAlign: 'center' }}>Enter the correct email and password</small>}
                <br />
                <p>Email :</p>
                <input 
                    type='text' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                {emailErr && <small style={{ color: '#d3521d' }}>Please enter your email</small>}
                <br />
                <p>Password :</p>
                <input 
                    type={showPassword ? 'text' : 'password'} 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                {passwordErr && <small style={{ color: '#d3521d' }}>Please enter your password</small>}
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
                <button onClick={validateLogin}><Link to='/Login'>Login</Link></button>
                <p style={{ fontSize: '15px' }}>Don't have an account yet? <Link to='/register'>Register</Link></p>
            </div>
            {/* <button onClick={handleAdminLogin} className="admin-login-btn">Login as Admin</button> */}
        </div>
    );
}

export default Login;