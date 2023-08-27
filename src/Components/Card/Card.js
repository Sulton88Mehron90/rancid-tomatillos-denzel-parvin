import './Card.css';
// import redTomato from '../../images/redTomato.png';
import Tomatillo from '../../images/Tomatillo.png'
import React, { useState } from 'react';

function Card({title, img, rating, id}) {
  const [isSelected, setIsSelected] = useState(false);
  const tomatilloImages = Array(Math.floor(rating)).fill(null);
  const cardClass = isSelected ? "glowing-border" : "";

  return (
    // <div id={id}>
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
  )
}

// function Card({title, img, rating, id}) {
 
//   const tomatilloImages = Array(Math.floor(rating)).fill(null);
//   const imageToUse = rating < 3 ? redTomato : Tomatillo;

//   return (
//     <div id={id}>
//       <img id={id} src={img} alt={`Poster of ${title}`} />
//       <h3 id={id}>{title}</h3>
//       <div className="rating-container">
//         {tomatilloImages.map((_, index) => (
//           <img 
//             key={index} 
//             src={imageToUse} 
//             style={{ width: '25px', height: '25px' }} 
//             alt="Rating logo" 
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

export default Card;
