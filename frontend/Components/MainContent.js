import React from 'react';
import '../Assets/CSS/MainContent.css';
import eventImage from '../Assets/Images/cor1.jpg'; // Import the image
import eventImage1 from '../Assets/Images/corp.jpg';
import Navbar from './Navbar';
import Footer from './Footer';
import eventImage2 from '../Assets/Images/cor5.jpg';
import eventImage3 from '../Assets/Images/cor6.jpg';
function MainContent() {
  return (
    <div>
      <Navbar/>
    <div className="main-content">
      <div className="text-content">
        <h1>CONFERENCE & SEMINARS</h1>
        <p>We ensure success of any conferences or seminars by well crafted event planning & Management also reviewing that’s our strength. Our ability to get into the minutest of the details enables us to secure & handle every aspect right from hospitality to the most advanced technical requirements of any conference or seminar. The ideal customer experience in an event is a comprehensive, yet flexible framework for achieving customer loyalty by learning and understanding your needs. we can tailor the pieces of the framework that are necessary to help you create the bonds of customer loyalty with your customers. We conceptualize event on the basis of products offered by organization to customers and dealers.
        </p>
      </div>
      <div className="image-content">
        <img src={eventImage} alt="Event" /> {/* Use the imported image */}
      </div>
    </div>
    <div className="main-content">
    <div className="image-content">
        <img src={eventImage1} alt="Event" /> {/* Use the imported image */}
      </div>
      <div className="text-content">
        <h1>AWARD NIGHT</h1>
<p>     
Having a beautiful backdrop for an award ceremony represents not only the significance of the event but also the respect the organizer has for the attendees, who took time out to attend, and to the award winners for their achievements Our team of designers can transform anything or any place to give you a stylish yet affordable award night.   </p>
      </div>
     
    </div>
    <div className="main-content">
      <div className="text-content">
        <h1>PRODUCT LAUNCH</h1>
<p>
Many companies we deal with have a need to promote new products both internally to their own organization and externally to their clients, buyers, dealer or press. Professionally we elevate your presentation with simple set and staging. With proper light effects, sound, data backup and professional technical advice. We use dynamic lighting effects, gobos, scanners etc to give a real feel of movement, change, and exciting environment. It is associated with warm and soft or alive and kicking, sound. We can certainly come up with ideas for that as well.        </p>
      </div>
      <div className="image-content">
        <img src={eventImage2} alt="Event" /> {/* Use the imported image */}
      </div>
    </div>
    <div className="main-content">
    <div className="image-content">
        <img src={eventImage1} alt="Event" /> {/* Use the imported image */}
      </div>
      <div className="text-content">
        <h1>PARTY</h1>
<p>     
Corporate Parties need to be such that the attendees have something to talk about and look forward to for the year to follow, and we make them such.

We design themes & concepts after factoring in the audience profile and age group and suggest ideas which are relevant to what the client would like to achieve.    
</p>  </div>
     
    </div><br/>
    <Footer/>
    </div>
    
  );
}

export default MainContent;
