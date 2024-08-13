import React, { useEffect, useState } from 'react';
import '../Assets/CSS/UsersList.css';
const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Retrieve users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <div className="users-container">
      <h2>Logged In Users</h2>
      {users.length === 0 ? (
        <p>No users have logged in yet.</p>
      ) : (
        <table className="users-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UsersList;
