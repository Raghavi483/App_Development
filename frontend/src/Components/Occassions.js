import React from 'react';
// import '../Assets/CSS/About.css'; // Import the CSS file
import Mixed from '../Assets/Images/Mixed.jpg';
import Footer from './Footer';
import Navbar from './Navbar';
import about from '../Assets/Images/about.jpeg';
import corpimg from '../Assets/Images/corpimg.jpg';
import corp from '../Assets/Images/corp.jpg';
import eve1 from '../Assets/Images/eve1.jpg';
import eve2 from '../Assets/Images/eve2.jpg';
import eve3 from '../Assets/Images/eve3.jpg';
import '../Assets/CSS/Occassions.css';
import eve4 from '../Assets/Images/eve4.jpg';
// import '../Assets/CSS/WeddingServices.css';

const WeddingServices= () => {
  return (
    <div><Navbar/>
    <div className="image-container">
    
      {/* You can also use <img> tag directly */}
      {/* <div className="image"><img src={corp}/></div><br/> */}
      <div className='wedd'><img src={eve1}/></div>
   <div className='para'><p><h2> PARTIES AND CELEBRATIONS
</h2>
  
  
   We plan and design bespoke parties and social events across India and have offices in Tamil Nadu. Our portfolio includes festive baby showers, elegant bridal showers, romantic engagement parties, intimate marriage proposals, exclusive dinners, corporate parties, modern mitzvahs, and trendy quinceañeras. If you can celebrate it, our event planners can create it! 
<br/><br/>
<br/>


</p></div>
<div class="row">
  <div class="column">
    <img src={eve2}/>
  </div>
  <div class="column">
    <img src={eve3}/>
  </div>
  <div class="column">
    <img src={eve4} />
  </div>
</div> <div className='para'>
<p>Brilliant Event Planning is an award-winning, full service event planning and design studio. Over the past decade, we have become known for our flawless execution, personal touches, and effortless designs. While based in India, we plan one-of-a-kind events all over India. </p>
,/</div>
{/* <div className='abb'><img src={corpimg}/></div> */}
    <Footer/></div></div>
  );
};

export default WeddingServices;
