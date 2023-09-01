import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Tomatillo from '../../images/Tomatillo.png';
import { NavLink } from 'react-router-dom';

const Navbar = ({ search, searchFilter }) => {
  // Logic for setting the day message
  const [dayMessage, setDayMessage] = useState('');
  useEffect(() => {
    const time = new Date();
    const day = time.toLocaleString('en-US', { weekday: 'long' });
    const morning = time.getHours() >= 6 && time.getHours() <= 12;

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

    setDayMessage(morning ? `Good Morning! ${message}` : `Good Afternoon! ${message}`);
  }, []);

  return (
    <nav>
      <div className="nav-content">
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <h1 className="nav-title">Rancid Tomatillos</h1>
          <img src={Tomatillo} className="nav-logo" alt="Tomatillo logo" />
        </NavLink>
        <div className="search-container">
          <form className="search-form">
            <input
              id="search-input"
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
};

export default Navbar;
