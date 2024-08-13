import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Assets/CSS/Users.css';  // Import the CSS file
import Sidebar from './Sidebar';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/reg/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    return (
        <div><Sidebar/><br/><br/><br/>
        <div className="users-container">
            <h1>Registered Users</h1>
            <ul className="users-list">
                {users.map((user, index) => (
                    <li key={index} className="user-item">
                        <div className="user-info">
                            <p><strong>Username:</strong> {user.username}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default Users;
