// import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
// import Login from "./Components/Login";
// import Register from "./Components/Register";
// import Navbar from "./Components/Navbar";
// import Home from "./Components/Home";
// //import './Assets/CSS/register.css';
// import About from "./Components/About";
// import CorporateEvents from "./Components/CorporateEvents";
// import EventForm from "./Components/EventForm";
// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//         <Route path="/home" element={<Home/>}/>
//           <Route path="/login" element={<Login/>} />
//           <Route path="/register" element={<Register/>} />
          
//           <Route path="/contact" element={<EventForm/>}/>
//           <Route path="/about" element={<About/>}/>
//         </Routes>
//       </Router>
//       {/* <Home/> */}
//       {/* <About/> */}
//       {/* <CorporateEvents/>  */}
//       {/* <EventForm/> */}
//       </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventForm from './Components/EventForm';

import Login from "./Components/Login";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
//import './Assets/CSS/register.css';
import About from "./Components/About";
import CorporateEvents from "./Components/CorporateEvents";
import ALogin from "./Components/adlogin";
// import Admin from "./Components/admin";
import Admin from './Components/admin';
import WeddingServices from './Components/WeddingServices';
import Occassions from './Components/Occassions';
import Dashboard from './Components/Dashboard';
import User from './Components/User';
import PaymentPage from './Components/PaymentPage';
// import { Dashboard } from '@mui/icons-material';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tracking" element={<CorporateEvents />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<EventForm/>} />
          <Route path="/CorporateEvents" element={<CorporateEvents/>} />
          <Route path="/WeddingServices" element={<WeddingServices/>} />
          <Route path="/Occassions" element={<Occassions/>} />
          <Route path="/adlogin" element={<ALogin/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/user" element={<User />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/PaymentPage" element={<PaymentPage />} />
          
          
          {/* <Route path="/categories" element={<Categories/>}/>
          <Route path="/cart" element={<CartPage/>} /> */}
        </Routes>
        {/* <Admin/> */}
      </div>
    </Router>
  );
}

export default App;