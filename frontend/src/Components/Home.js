import React, { useState, useEffect } from 'react';
import '../Assets/CSS/Home.css';
import image1 from '../Assets/Images/image1.jpg';
import image2 from '../Assets/Images/image2.jpg';
import image3 from '../Assets/Images/image3.jpg';
import image4 from '../Assets/Images/Untitled design.jpg';
import image5 from '../Assets/Images/brands.jpg';
import image6 from '../Assets/Images/fashion.jpg';
import image7 from '../Assets/Images/exhi.jpg';
import image8 from '../Assets/Images/wed side.jpg';
import Navbar from './Navbar';
import Footer from './Footer';


const Home = () => {
  const images = [image1,image2,image3];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const updateImage = () => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false);
      }, 1000); // Set timeout to match the transition duration
    };

    const intervalId = setInterval(updateImage, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);
 
  return (
    <div className='home-b'>
        <Navbar/>
   
    <div className="image-slider">
      <img
        src={images[currentIndex]}
        alt="Sliding images"
        className={fade ? 'fade' : ''}
      />
    </div>
    <br/><br/><div  className='wel'>Welcome to ROVENTS -Best Wedding & Event Management Company </div><br/>
    <br/>
    <div class="box-container">
    <div class="box">Experience
          <br></br><br/>20+ 
        </div>
        <div class="box">Weddings
          <br></br><br/>400+
        </div>
        <div class="box">Corporate Events <br/><br/>600+</div>
        <div class="box">Social Events<br/><br/>300+</div>
       
    </div><br/>
   <div className='ser'>OUR SERVICES</div> <br/>
    
     <div class='services'>
      <div className='servi'>  Seminars & Conferences<br/><br/><img src={image4}/>
      <p>We are one of the best event management companies for organising seminars and conferences. We are committed to serving the varied needs of the businesses and delivering the best outcomes meeting their expectations.</p></div>
      <div className='servi'>Brand Promotions
        <br/><br/><img src={image5}/><p>Seeking a smart event management company for your brand promotion related needs? V3 Events is the perfect choice to fulfil such requirements efficiently. We have experienced professionals to deliver such services.</p>
      </div>
      <div className='servi'>Fashion Shows<br/><br/><img src={image6}/>
      <p>We have an incredible team of experienced and young talent who can glam up fashion shows beyond expectations. Connect with us now if you are looking for the best professionals for organising fashion shows.</p></div>
      <div className='servi'>Exhibitions<br/><br/><img src={image7}/>
      <p>Make your exhibitions appealing and highly engaging platforms for your target audience with ROVENTS. Let us boost your business in a smart and efficient manner with our expertise.</p></div>
     </div><br/>
     <div class='wedimg'><img src={image8}/></div>
     <div className='wed'>Wedding Planner<br/><p>Our Events and Entertainments specialises in planning lavish and flawless events. Our team has qualified and experienced event planners who get counted as the finest wedding designers and event organisers in India</p></div>
    <br/><br/><br/><br/><br/><br/> 
    <Footer/>
     </div>
  );
};

export default Home;
