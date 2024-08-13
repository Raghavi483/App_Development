import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/CSS/EventForm.css';
import axios from 'axios';  // Import axios
import pink from '../Assets/Images/pink.jpeg';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import about4 from '../Assets/Images/about4.jpg'
const EventForm = () => {
  const [minDate, setMinDate] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    eventType: '',
    eventDate: '',
    eventVenue: '',
    referralSource: '',
    story: ''
  });


  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);
  }, []);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation check
    const { fullName, email, phoneNumber, eventType, eventDate, eventVenue, referralSource, story } = formData;
    if (!fullName || !email || !phoneNumber || !eventType || !eventDate || !eventVenue || !referralSource || !story) {
      window.alert("Please fill in all the details before submitting.");
      return; // Stop form submission if validation fails
    }

    try {
      console.log('Sending data:', formData);
      // Sending data to the backend using axios
      const response = await axios.post('http://localhost:8080/api/reach', formData);
      console.log('Response received:', response.data);

      // Store event data in localStorage
      const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
      storedEvents.push(formData);
      localStorage.setItem('events', JSON.stringify(storedEvents));

      window.alert("Event is booked! Proceed to payment.");
      navigate('/payment'); // Redirect to payment page
    } catch (error) {
      console.error('Error sending data:', error.response || error);
      window.alert("There was an error booking the event. Please try again.");
    }
  };


  return (
    <div>
      <Navbar />
      <div className='pink'>
        <img src={pink} alt="Background" />
        <div className='pep'>
          <p>We Will be glad to become a part of your unique events!!</p>
        </div>
        <div className="form-and-info">
          <div className="contact-info">
            <div className="info-box">
              <FaEnvelope className="icon" />
              <p>rovents@gmail.com</p>
            </div>
            <div className="info-box">
              <FaPhone className="icon" />
              <p>+91 9963628733</p>
            </div>
            <div className="info-box">
              <FaMapMarkerAlt className="icon" />
              <p>123 Main street, Chennai, Tamil Nadu</p>
            </div>
          </div>
         
          <div className="form-container">
            <form className="event-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                id='fullName'
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                id='email'
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phoneNumber"
                id='phoneNumber'
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <div className="form-group">
                <label htmlFor="eventType">Event Type</label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                >
                  <option value="">Select Event Type</option>
                  <option value="weddings">Weddings</option>
                  <option value="occasions">Occasions</option>
                  <option value="birthday">Birthday</option>
                  <option value="party">Party</option>
                  <option value="baby-shower">Baby Shower</option>
                  <option value="other-events">Other Events</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="eventDate">Event Date</label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  placeholder="Event Date"
                  value={formData.eventDate}
                  required
                  min={new Date().toISOString().slice(0, -8)}
                  onChange={handleChange}
                />
              </div>
              <input
                type="text"
                name="eventVenue"
                id='eventVenue'
                placeholder="Event Venue"
                value={formData.eventVenue}
                onChange={handleChange}
              />
              <div className="form-group">
                <label htmlFor="referralSource">How did you hear about us?</label>
                <select
                  id="referralSource"
                  name="referralSource"
                  value={formData.referralSource}
                  onChange={handleChange}
                >
                  <option value="">Select Source</option>
                  <option value="friends">Friends</option>
                  <option value="online">Online</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <textarea
                name="story"
                placeholder="Tell us your story"
                id='story'
                value={formData.story}
                onChange={handleChange}
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        {/* <div className='immm'>
          <img src={about4} alt="Contact Details" className="contact-image" /> 
          </div> */}
      </div>
      <Footer />.
      
    </div>
  );
};

export default EventForm;
