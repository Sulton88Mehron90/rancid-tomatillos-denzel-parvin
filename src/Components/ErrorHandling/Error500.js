import React from 'react';
import { NavLink } from 'react-router-dom';
import './Error500.css';

function Error500() {
  return (
    <div className="error-page-container">
      <h1 className="error-heading">500 - Internal Server Error</h1>
      <div className="error-message">
        <h3>Oops! Something went wrong on our end.</h3>
        <p>We're working to fix it. Please try again later.</p>
      </div>
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <button className="go-home-button" aria-label="Go back to the home page">Go Back to Home Page</button>
      </NavLink>
    </div>
  );
}

export default Error500;
