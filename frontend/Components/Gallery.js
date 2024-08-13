import React, { useState } from 'react';
import '../Assets/CSS/Gallery.css';
import Navbar from './Navbar';
import Footer from './Footer';
const Gallery = () => {
  const [filter, setFilter] = useState('ALL');
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: require('../Assets/Images/wedding1.jpg'), category: 'WEDDINGS',height:'500px' },
    { src: require('../Assets/Images/events1.jpg'), category: 'CORPORATE EVENTS',height:"100px" },
    { src: require('../Assets/Images/occ1.jpg'), category: 'OCCASSIONS' },
    { src: require('../Assets/Images/wedding2.jpg'), category: 'WEDDINGS' },
    { src: require('../Assets/Images/events2.jpg'), category: 'CORPORATE EVENTS' },
    { src: require('../Assets/Images/occ2.jpg'), category: 'OCCASSIONS' },
    { src: require('../Assets/Images/wedding3.jpg'), category: 'WEDDINGS' },
    { src: require('../Assets/Images/events3.jpg'), category: 'CORPORATE EVENTS' },
    { src: require('../Assets/Images/occ3.jpg'), category: 'OCCASSIONS' },
    { src: require('../Assets/Images/wedding4.jpg'), category: 'WEDDINGS' },
    { src: require('../Assets/Images/events4.jpg'), category: 'CORPORATE EVENTS' },
    { src: require('../Assets/Images/occ4.jpg'), category: 'OCCASSIONS' },
    { src: require('../Assets/Images/wedding5.jpg'), category: 'WEDDINGS' },
    { src: require('../Assets/Images/events5.jpg'), category: 'CORPORATE EVENTS' },
    { src: require('../Assets/Images/occ5.jpg'), category: 'OCCASSIONS' },
    { src: require('../Assets/Images/wedding6.jpeg'), category: 'WEDDINGS' },
    { src: require('../Assets/Images/events6.jpg'), category: 'CORPORATE EVENTS' },
    { src: require('../Assets/Images/occ6.jpg'), category: 'OCCASSIONS' },
    { src: require('../Assets/Images/wedding7.jpg'), category: 'WEDDINGS' },
    { src: require('../Assets/Images/events7.jpg'), category: 'CORPORATE EVENTS' },
    { src: require('../Assets/Images/occ7.jpg'), category: 'OCCASSIONS' },
    { src: require('../Assets/Images/wedding8.jpg'), category: 'WEDDINGS' },
    { src: require('../Assets/Images/events8.jpg'), category: 'CORPORATE EVENTS' },
    { src: require('../Assets/Images/occ8.jpg'), category: 'OCCASSIONS' },
    { src: require('../Assets/Images/wedding9.jpg'), category: 'WEDDINGS' },
    { src: require('../Assets/Images/events9.jpg'), category: 'CORPORATE EVENTS' },
    { src: require('../Assets/Images/occ9.jpg'), category: 'OCCASSIONS' },
    { src: require('../Assets/Images/wedding10.jpg'), category: 'WEDDINGS' },
    { src: require('../Assets/Images/events10.jpg'), category: 'CORPORATE EVENTS' },
    { src: require('../Assets/Images/occ10.jpg'), category: 'OCCASSIONS' }
  ];

  const filteredImages = filter === 'ALL' ? images : images.filter(image => image.category === filter);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImageView = () => {
    setSelectedImage(null);
  };

  return (
  <div className='nav'><Navbar/>
    <div className="gallery-page">
      <h1 className="gallery-title">Galleries</h1>
      <div className="filter-options">
        {['ALL', 'WEDDINGS', 'CORPORATE EVENTS', 'OCCASSIONS'].map(option => (
          <span 
            key={option} 
            className={`filter-option ${filter === option ? 'active' : ''}`}
            onClick={() => setFilter(option)}
          >
            {option}
          </span>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredImages.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => handleImageClick(image.src)}>
            <img src={image.src} alt={image.category} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-viewer" onClick={closeImageView}>
          <div className="image-container">
            <img src={selectedImage} alt="Enlarged View" />
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </div>
  );
}

export default Gallery;
