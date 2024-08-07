import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import '../Assets/CSS/Sidebar.css';
import Home from './Home';
const Sidebar = () => {
    const [sidebar, setSidebar] = useState(true);
    const navigate = useNavigate();

    const showSidebar = () => setSidebar(!sidebar);

    const handleLogout = () => {
        const confirmLogout = window.confirm('Are you sure you want to logout?');
        if (confirmLogout) {
            navigate('/Home');
        }
    };

    return (
        <>
            <div className="side-navbar">
                <FaBars className="side-menu-bars" onClick={showSidebar} />
                <h2><Link to='/Dashboard' style={{textDecoration:'none'}}>DashBoard</Link></h2>
                <h1>ROVENTS</h1>
                <div className="side-logout" onClick={handleLogout}>
                    <h3><Link to='/Home' style={{textDecoration:'none'}}>Logout</Link></h3>
                </div>
            </div>
            <nav className={sidebar ? 'side-nav-menu active' : 'side-nav-menu'}>
                <ul className="side-nav-menu-items" onClick={showSidebar}>
                    <li className="side-navbar-toggle">
                        <span className="side-menu-bars">×</span>
                    </li>
                    <li className="side-nav-text">
                        <Link to="/event">Events</Link>
                    </li>
                    <li className="side-nav-text">
                        <Link to="/bookings">Bookings</Link>
                    </li>
                    <li className="side-nav-text">
                        <Link to="/user">Users</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Sidebar;
