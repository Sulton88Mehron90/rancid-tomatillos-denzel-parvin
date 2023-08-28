import { getSingleMovie } from "../ApiCalls";
import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import './Focus.css';


function Focus() {
  const [singleMovie, setSingleMovie] = useState({})

  const movieID = useParams();
  console.log('movieID', movieID)

  useEffect(() => {
    getSingleMovie(movieID.id)
      .then(data => setSingleMovie(data.movie))
  }, [])
  // The warning on the webpack is related to the useEffect hook in your Focus.js component. when i add the movieID.id it was gone. weird. [movieID.id]

  console.log("singleMovie after Fetch", singleMovie); //console

  console.log(typeof singleMovie.genres, singleMovie.genres); //console


  return (
    <div id="focus-container" style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${singleMovie.backdrop_path}')`
    }}>
      <div id="focus-text-content">
        <h2>{singleMovie.title}</h2>
        <h3>{singleMovie.tagline}</h3>
        <p><span className="label">overview:</span> {singleMovie.overview}</p>
        <p><span className="label">average rating:</span> {singleMovie.average_rating}/10</p>
        <p><span className="label">runtime:</span> {singleMovie.runtime} minutes</p>
        {/* <p><span className="label">genre(s):</span> {singleMovie.genres.join(", ")}</p> */}
        <p><span className="label">genre(s):</span> {singleMovie.genres ? singleMovie.genres.join(', ') : 'N/A'}</p>
        <p><span className="label">release date:</span> {singleMovie.release_date}</p>
        <NavLink to="/">
          <button aria-label="Go Back"></button>
        </NavLink>
      </div>
      <img src={singleMovie.backdrop_path} alt={singleMovie.title} />
    </div>
  );
};
export default Focus;