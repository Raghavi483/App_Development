import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/CSS/User.css';
import Sidebar from './Sidebar';

const User = () => {
    const navigate = useNavigate();

    const currentUser = JSON.parse(localStorage.getItem('user'));
    const pastUsers = JSON.parse(localStorage.getItem('pastUsers')) || [];

    if (!currentUser) {
        navigate('/login'); // Redirect to login if no user is logged in
        return null;
    }

    return (
        <div><Sidebar/>
        <div className="user-details">
    
            <h2>Current User Details</h2>
            <div className="user-card">
                <p><strong>Email:</strong> {currentUser.email}</p>
                <p><strong>Password:</strong> {currentUser.password}</p>
                {/* Add more user details if necessary */}
            </div>
            
            <h2>Past User Details</h2>
            {pastUsers.length > 0 ? (
                pastUsers.map((user, index) => (
                    <div className="user-card" key={index}>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Password:</strong> {user.password}</p>
                        {/* Add more user details if necessary */}
                    </div>
                ))
            ) : (
                <p>No past user details found.</p>
            )}
            </div>
        </div>
    );
}

export default User;
