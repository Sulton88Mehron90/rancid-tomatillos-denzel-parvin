import './Card.css';
import Tomatillo from '../../images/Tomatillo.png'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Card({title, img, rating, id}) {
  const [isSelected, setIsSelected] = useState(false);
  const tomatilloImages = Array(Math.floor(rating)).fill(null);
  const cardClass = isSelected ? "glowing-border" : "";

  return (
    <Link to={`/movies/${id}`}>
      <div id={id} className={cardClass} onClick={() => setIsSelected(!isSelected)}>
        <img id={id} src={img} alt={`Poster of ${title}`} />
        <h3 id={id}>{title}</h3>
        <div className="rating-container">
          {tomatilloImages.map((_, index) => (
            <img 
            key={index} 
            src={Tomatillo} 
            style={{ width: '25px', height: '25px' }} 
            alt="Rating logo green" 
            />
            ))}
        </div>
      </div>
    </Link>
  )
}

export default Card;