import React, { useEffect, useState } from 'react';
import '../Assets/CSS/EventsList.css';
import Sidebar from './Sidebar';

const EventsList = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  const isFieldValid = (field) => {
    return field !== undefined && field !== null && field !== '';
  };

  const filteredEvents = events.filter(event =>
    Object.values(event).some(value =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div><Sidebar/><br/><br/><br/><br/>
    <div className="events-container">
      <h2>Registered Events</h2>
      <input
        type="text"
        placeholder="Search events..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      {filteredEvents.length === 0 ? (
        <p className="no-events">No events match your search.</p>
      ) : (
        <table className="events-table">
          <thead>
            <tr>
              {Object.keys(filteredEvents[0] || {}).filter(key => 
                filteredEvents.some(event => isFieldValid(event[key]))
              ).map((key, index) => (
                <th key={index}>{key.replace(/([A-Z])/g, ' $1').trim()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredEvents.map((event, index) => (
              <tr key={index}>
                {Object.keys(event).filter(key => 
                  isFieldValid(event[key])
                ).map((key, colIndex) => (
                  <td key={colIndex}>{event[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
  );
};

export default EventsList;
