import { getSingleMovie } from "../ApiCalls";
import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";

function Focus() {
  const [singleMovie, setSingleMovie] = useState({})

  const movieID = useParams();
  console.log('movieID', movieID)

  useEffect(() => {
    getSingleMovie(movieID.id)
    .then(data => setSingleMovie(data.movie))
  }, [])

  console.log("singleMovie after Fetch",singleMovie)

  return (
    <div id={singleMovie.id}>
      <h2>{singleMovie.title}</h2>
      <h3>{singleMovie.tagline}</h3>
      <p>overview: {singleMovie.overview}</p>
      <p>average rating: {singleMovie.average_rating}/10</p>
      <p>runtime: {singleMovie.runtime} minutes</p>
      <p>genre(s): {singleMovie.genres}</p>
      <p>release date: {singleMovie.release_date}</p>
      <NavLink to="/"><button>Go Back</button></NavLink>
      <img src={singleMovie.backdrop_path} alt={singleMovie.title} />
    </div>
  )
}

export default Focus;