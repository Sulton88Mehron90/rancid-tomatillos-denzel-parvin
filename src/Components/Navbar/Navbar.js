import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Tomatillo from '../../images/Tomatillo.png';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({search, searchFilter, searchVisible, toggleSearch}) => {
  // Logic for setting the day message
  const [dayMessage, setDayMessage] = useState('');
  useEffect(() => {
    console.log("useEffect ran");
    const time = new Date();
    const hour = time.getHours();
    const day = time.toLocaleString('en-US', { weekday: 'long' });
    
    let timeOfDay;
    if (hour >= 6 && hour < 12) {
      timeOfDay = 'Good Morning';
    } else if (hour >= 12 && hour < 18) {
      timeOfDay = 'Good Afternoon';
    } else if (hour >= 18 && hour < 21) {
      timeOfDay = 'Good Evening';
    } else {
      timeOfDay = 'Good Night';
    }
  
    let message;
    if (day.toLowerCase() === 'monday') {
      message = `Happy ${day}! How about a comedy to start the week?`;
    } else if (day.toLowerCase() === 'tuesday') {
      message = `${day}, huh? Perfect day for a thriller.`;
    } else if (day.toLowerCase() === 'wednesday') {
      message = `It's ${day}! Feeling adventurous? Try a new release.`;
    } else if (day.toLowerCase() === 'thursday') {
      message = `${day} vibes! Maybe a classic movie tonight?`;
    } else if (day.toLowerCase() === 'friday') {
      message = 'Woo-hoo, it\'s Friday! Movie night, anyone?';
    } else if (day.toLowerCase() === 'saturday') {
      message = 'Saturday binge-watching, here we come!';
    } else {
      message = 'Easy like Sunday morning... perfect for a film marathon!';
    }
  
    setDayMessage(`${timeOfDay}! ${message}`);
  }, []);
  
  if(searchVisible){
    return (
      <nav>
        <div className="nav-content">
          <NavLink to="/" style={{textDecoration:'none'}} >
            <h1 className="nav-title">Rancid Tomatillos</h1>
            <img src={Tomatillo} className="nav-logo" alt="Tomatillo logo" />
          </NavLink>
          <div className="search-container">
            <form>
              <input aria-label="Search for movies"
              id="search-input"
              className="search-input"
              type="text"
              placeholder="Search for movies..."
              name={search}
              value={search}
              onChange={searchFilter}
              />
            </form>
          </div>
          <span className="welcome-note">{dayMessage}</span>
        </div>
      </nav>
    );
  } else {
    return (
      <nav>
        <div className="nav-content">
          <NavLink to="/" style={{textDecoration:'none'}} onClick={toggleSearch}>
            <h1 className="nav-title">Rancid Tomatillos</h1>
            <img src={Tomatillo} className="nav-logo" alt="Tomatillo logo" />
          </NavLink>
          <span className="welcome-note">{dayMessage}</span>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  search: PropTypes.string.isRequired,
  searchFilter: PropTypes.func.isRequired,
  searchVisible: PropTypes.bool.isRequired,
  toggleSearch: PropTypes.func.isRequired
}

export default Navbar;