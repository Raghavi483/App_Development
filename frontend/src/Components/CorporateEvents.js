import React from 'react';
import '../Assets/CSS/About.css'; // Import the CSS file
import Mixed from '../Assets/Images/Mixed.jpg';
import Footer from './Footer';
import Navbar from './Navbar';
import about from '../Assets/Images/about.jpeg';
import corpimg from '../Assets/Images/corpimg.jpg';
import corp from '../Assets/Images/corp.jpg';
import cor1 from '../Assets/Images/cor1.jpg';
import cor2 from '../Assets/Images/cor2.jpg';
import cor3 from '../Assets/Images/cor3.jpg';
import cor4 from '../Assets/Images/cor4.jpg';
import '../Assets/CSS/CorporateEvents.css';

const CorporateEvents= () => {
  return (
    <div><Navbar/>
    <div className="image-container">
    
      {/* You can also use <img> tag directly */}
      {/* <div className="image"><img src={corp}/></div><br/> */}
      <div className='wedd'><img src={cor1}/></div>
   <div className='para'><p><h2>Corporate Event Management program arrangement with high-level expertise
   </h2>
  
   Are you looking for the best corporate events management house to host your conferences, meetings and award shows? Your search ends here with us. We are not only the most experienced corporate events managers, but we are a complete management house to support you host the program with all the ingredients and arrangements you need.
<br/><br/>
Our experience and infrastructural support would help you in the entire arrangement, where we would be maintaining all the fabrications of your homage and hostage.
<br/>


</p></div>
<div class="row">
  <div class="column">
    <img src={cor2}/>
  </div>
  <div class="column">
    <img src={cor3}/>
  </div>
  <div class="column">
    <img src={cor4} />
  </div>
</div>
{/* <div className='abb'><img src={corpimg}/></div> */}
    <Footer/></div></div>
  );
};

export default CorporateEvents;
