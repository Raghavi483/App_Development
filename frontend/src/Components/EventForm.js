
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/CSS/EventForm.css';
import pink from '../Assets/Images/pink.jpeg';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const EventForm = () => {
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

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing events from localStorage
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    // Add the new event to the array
    storedEvents.push(formData);
    // Save the updated events array to localStorage
    localStorage.setItem('events', JSON.stringify(storedEvents));

    console.log(formData);
    window.alert("Event is booked! Proceed to payment.");
    navigate('/PaymentPage'); // Redirect to payment page
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
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phoneNumber"
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
                 {/* <option value="">Select Event Type</option> */}
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
                  onChange={handleChange}
                />
              </div>
              <input
                type="text"
                name="eventVenue"
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
                  {/* <option value="">Select Source</option> */}
                  <option value="friends">Friends</option>
                  <option value="online">Online</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <textarea
                name="story"
                placeholder="Tell us your story"
                value={formData.story}
                onChange={handleChange}
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      </div>
  );
};

export default EventForm;
