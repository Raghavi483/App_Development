import React from 'react';
import '../Assets/CSS/About.css'; // Import the CSS file
import Mixed from '../Assets/Images/Mixed.jpg';
import Footer from './Footer';
import Navbar from './Navbar';
import about from '../Assets/Images/about.jpeg';
import corpimg from '../Assets/Images/corpimg.jpg';
import corp from '../Assets/Images/corp.jpg';
import wed1 from '../Assets/Images/wed1.jpg';
import wed2 from '../Assets/Images/wed2.jpg';
import wed3 from '../Assets/Images/wed3.jpg';
import wed4 from '../Assets/Images/wed4.jpg';
import '../Assets/CSS/WeddingServices.css';

const WeddingServices= () => {
  return (
    <div><Navbar/>
    <div className="image-container">
    
      {/* You can also use <img> tag directly */}
      {/* <div className="image"><img src={corp}/></div><br/> */}
      <div className='wedd'><img src={wed1}/></div>
   <div className='para'><p><h2>Planning and Design 
   Portfolio</h2>
  
We offer wedding planning and design across India from our studios in Mumbai. We also plan destination weddings across the India, as well as abroad in places such as Mumbai, Kerala, Tamil Nadu. Our recent destination weddings have brought us to Lake Tahoe, Napa, Charleston, The Maldives, and Savannah, to name a few! 
<br/><br/>
We’re known for seamlessly orchestrating complex events, with a focus on tents, raw spaces, private estates, and celebrations with multiple days of events. We believe that every wedding we plan and design should reflect our couples unique love story and blend their families together. We love fusion weddings of all kinds, especially Indian fusion weddings. 
<br/><br/>
<br/>

Our corporate services include:<br/><br/>
 <li>Consultation</li>
 <li>Sourcing appropriate vendors while staying within budget</li>
 <li>Team building events</li>
 <li> Concept and theme design</li>
 <li>Venue sourcing</li>
 <li>Vendor booking and management</li>
 <li>Staff recruitment and management</li>
 <li>Contract negotiation and management</li>
 <li>Timeline development</li>
 <li>Event design, installation and production management</li>
</p></div>
<div class="row">
  <div class="column">
    <img src={wed2}/>
  </div>
  <div class="column">
    <img src={wed3}/>
  </div>
  <div class="column">
    <img src={wed4} />
  </div>
</div>
{/* <div className='abb'><img src={corpimg}/></div> */}
    <Footer/></div></div>
  );
};

export default WeddingServices;
