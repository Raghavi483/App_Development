// import React, { useState } from "react";
// import "../Assets/CSS/Navbar.css"; 
// import { Link } from "react-router-dom";
// const Navbar = () => {
//     const [showDropdown, setShowDropdown] = useState(false);

//     return (
//         <div className="navbar">
//              {/* <Link to="/About" className="nav-link"> */}
//                 <h2>ABOUT</h2>
//             {/* </Link> */}
            
//             <div 
//                 className="navbar-item" 
//                 onMouseEnter={() => setShowDropdown(true)}
//                 onMouseLeave={() => setShowDropdown(false)}
//             >
//                 <h2 className="services">SERVICES</h2>
//                 {showDropdown && (
//                     <div className="dropdown">
//                         <p>Corporate Events</p>
//                         <p>Weddings</p>
//                         <p>Social Gatherings</p>
//                     </div>
//                 )}
//             </div>
//             <h1>MOMENTOUS</h1>
//             <h2>LET'S TALK</h2>
//             <h2>GET STARTED</h2>
//         </div>
//     );
// }

// export default Navbar;
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import '../Assets/CSS/Navbar.css';
// // import logo from '../Assets/Images/logo.jpg';


// function Navbar() {
// //   const { cart } = useContext(CartContext);
// //   const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         {/* <img src={logo} alt="Logo" className="logo-img" /> */}
//         <Link to="/">Toy Store</Link>
//       </div>
//       <ul className="nav-links">
//         <li><Link to="/">HOME</Link></li>
//         <li><Link to="/about">ABOUT US</Link></li>
//         <li><Link to="/tracking">EVENTS</Link></li>
//         <li><Link to="/contact">REACH US</Link></li>
//       </ul>
//       <div className="auth-links">
        
//         {/* <Link to="/cart" className="cart-icon"> */}
//           {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
//           {/* {cartCount > 0 && <span className="cart-count">{cartCount}</span>} */}
//         {/* </Link> */}
//         <Link to="/login">Login</Link>
//         <Link to="/register">Register</Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/CSS/Navbar.css';

function Navbar() {
  // const { cart } = useContext(CartContext);
  // const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="logo">
        {/* <img src={logo} alt="Logo" className="logo-img" /> */}
        <Link to="/">ROVENTS</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT US</Link></li>
        <li className="dropdown">
          <Link to="/events" className="dropbtn">EVENTS</Link>
          <div className="dropdown-content">
            <Link to="/WeddingServices">Weddings</Link>
            <Link to="/CorporateEvents">Corporate Events</Link>
            <Link to="/Occassions">Occasions</Link>
          </div>
        </li>
        <li><Link to="/contact">REACH US</Link></li>
        <li><Link to="/Login">GET STARTED</Link></li>
      </ul>
      <div className="auth-links">
        {/* <Link to="/cart" className="cart-icon"> */}
        {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
        {/* {cartCount > 0 && <span className="cart-count">{cartCount}</span>} */}
        {/* </Link> */}
        <Link to="/adlogin">Admin</Link>
        {/* <Link to="/register">Register</Link> */}
      </div>
    </nav>
  );
}

export default Navbar;
