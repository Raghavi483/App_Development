import React, { useState, useEffect } from 'react';
import '../Assets/CSS/Home.css';
import image1 from '../Assets/Images/image1.jpg';
import image2 from '../Assets/Images/image2.jpg';
import image3 from '../Assets/Images/image3.jpg';
import imagee from '../Assets/Images/image4.png';
import image4 from '../Assets/Images/Untitled design.jpg';
import image5 from '../Assets/Images/brands.jpg';
import image6 from '../Assets/Images/fashion.jpg';
import image7 from '../Assets/Images/exhi.jpg';
import image8 from '../Assets/Images/wed side.jpg';
import image9 from '../Assets/Images/conference.png';
import image10 from '../Assets/Images/virtual.jpg';
import image11 from '../Assets/Images/mice.jpg';
import image12 from '../Assets/Images/concerts.jpg';
import slide1 from '../Assets/Images/slide1.jpg';
import slide2 from '../Assets/Images/slide2.jpeg';
import slide3 from '../Assets/Images/slide3.jpg';
import slide4 from '../Assets/Images/slide4.jpg';
import slide5 from '../Assets/Images/slide5.jpg';
import slide6 from '../Assets/Images/slide6.jpg';
import slide7 from '../Assets/Images/slide7.jpg';
import slide8 from '../Assets/Images/slide8.jpg';
import slide9 from '../Assets/Images/slide9.jpg';
import slide10 from '../Assets/Images/slide10.jpg';
import slide11 from '../Assets/Images/slide11.jpg';
import slide12 from '../Assets/Images/slide12.jpg';
import SmallImageSlider from './SmallImageSlider';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
  const images = [image1, image2, image3, imagee];
  const smallImagesSets = [
    [slide1, slide2, slide3],
    [slide4, slide5, slide6],
    [slide7, slide8, slide9],
    [slide10, slide11,slide12]
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const updateImage = () => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false);
      }, 1000);
    };

    const intervalId = setInterval(updateImage, 2000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className='home-b'>
      <Navbar />
      <div className="image-slider">
        <img
          src={images[currentIndex]}
          alt="Sliding images"
          className={fade ? 'fade' : ''}
        />
      </div>
      <br /><br />
      <div className='wel'>Welcome to ROVENTS - Best Wedding & Event Management Company</div>
      <br /><br />
      <div className="box-container">
        <div className="box">Experience<br /><br />20+</div>
        <div className="box">Weddings<br /><br />400+</div>
        <div className="box">Corporate Events<br /><br />600+</div>
        <div className="box">Social Events<br /><br />300+</div>
      </div>
      <br />
      <div className='ser'>OUR SERVICES</div>
      <br />
      <div className='services'>
        <div className='servi'>Seminars & Conferences<br /><br /><img src={image4} alt="Seminars & Conferences" />
          <p>We are one of the best event management companies for organising seminars and conferences. We are committed to serving the varied needs of the businesses and delivering the best outcomes meeting their expectations.</p>
        </div>
        <div className='servi'>Brand Promotions<br /><br /><img src={image5} alt="Brand Promotions" />
          <p>Seeking a smart event management company for your brand promotion related needs? V3 Events is the perfect choice to fulfil such requirements efficiently. We have experienced professionals to deliver such services.</p>
        </div>
        <div className='servi'>Fashion Shows<br /><br /><img src={image6} alt="Fashion Shows" />
          <p>We have an incredible team of experienced and young talent who can glam up fashion shows beyond expectations. Connect with us now if you are looking for the best professionals for organising fashion shows.</p>
        </div>
        <div className='servi'>Exhibitions<br /><br /><img src={image7} alt="Exhibitions" />
          <p>Make your exhibitions appealing and highly engaging platforms for your target audience with ROVENTS. Let us boost your business in a smart and efficient manner with our expertise.</p>
        </div>
        <div className='servi'>Corporate Events<br /><br /><img src={image9} alt="Corporate Events" />
          <p>V3 Events can be your one-stop event management provider for corporate events. We offer comprehensive corporate event management and creative services, tailor-made precisely according to your needs.</p>
        </div>
        <div className='servi'>Virtual Shows<br /><br /><img src={image10} alt="Virtual Shows" />
          <p>Make your business unaffected by the global challenges and geographical boundaries. Promote your products and/or services worldwide conveniently with our professional assistance in organising virtual events.</p>
        </div>
        <div className='servi'>Mice<br /><br /><img src={image11} alt="Mice" />
<p>V3 Events is one of the most sought after event management companies for organising Meetings, Incentives, Conferences & Exhibitions (MICE) in Delhi NCR. Connect with us now for impeccable MICE management services.</p>        </div>
        <div className='servi'>Concerts<br /><br /><img src={image12} alt="Concerts" />
          <p>V3 Events is a well-reputed event management company for planning events involving Bollywood artists. We have numerous celebrities with us ready for collaboration for private events.</p>
        </div>
      </div>
     
      <br /><br />
      
      <br /><br /><br /><br />
      <Footer />
    </div>
  );
};

export default Home;
