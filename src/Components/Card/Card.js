import './Card.css';
import Tomatillo from '../../images/Tomatillo.png'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Card({ title, img, rating, id, toggleSearch }) {
  const tomatilloImages = Array(Math.floor(rating)).fill(null);

  return (
    <Link to={`/movies/${id}`} className="no-underline">
      <div
        id={id}
        onClick={toggleSearch}
        role="button"
        aria-label={`Click to see details for movie ${title}`}
      >
        <img id={id} src={img} alt={`Poster of the movie titled ${title}`} />
        <h3 id={id}>{title}</h3>
        <div className="rating-container">
          {tomatilloImages.map((_, index) => (
            <img
              key={`${id}-${index}`}
              src={Tomatillo}
              style={{ width: '25px', height: '25px' }}
              alt="Tomatillo rating logo"
            />
          ))}
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  toggleSearch: PropTypes.func.isRequired
}

export default Card;