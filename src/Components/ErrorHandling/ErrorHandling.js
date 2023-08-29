// function ErrorHandling() {
//   return (
//     <h3>Sorry! That page doesn't seem to exist. Try going back to the home page.</h3>
//   )
// }

// export default ErrorHandling;

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './ErrorHandling.css';

const movieFunFacts = [
  "The roar from the T-Rex in 'Jurassic Park' is a combination of tiger, alligator, and baby elephant sounds.",
  "The phrase 'I'll be back' from 'The Terminator' was originally scripted as 'I'll come back'.",
  "The movie 'Titanic' won 11 Oscars, but none for acting.",
  "In 'The Matrix,' Neo's passport expires on September 11, 2001.",
  "The carpet in The Shining's Overlook Hotel is the same design as the one in Toy Story's Sid's house.",
];
function ErrorHandling() {
  const [funFact, setFunFact] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * movieFunFacts.length);
    setFunFact(movieFunFacts[randomIndex]);
  }, []);

  return (
    <div className="error-page-container">
      <h1 className="error-heading">404 - Page Not Found</h1>
      <div className="error-handling">
        <h3 style={{ fontSize: '27px', color: 'white', marginTop: '-20px' }}>
          Sorry! That page doesn't seem to exist. Try going back to the home page.
        </h3>
      </div>
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <button className="go-home-button">Go Back to Home Page</button>
      </NavLink>
      <div className="fun-fact-container">
        <h4 className="fun-fact-heading">Here's a movie fun fact to cheer you up:</h4>
        <p className="fun-fact">{funFact}</p>
      </div>
    </div>
  );
}

export default ErrorHandling;