import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { getSingleMovie, getSingleMovieVideos } from "../ApiCalls";
import "./Focus.css";

function Focus({ toggleSearch }) {
  const [singleMovie, setSingleMovie] = useState({});
  const [singleMovieVideos, setSingleMovieVideos] = useState([]);
  const [singleMovieError, setSingleMovieError] = useState("");
  const [showVideo, setShowVideo] = useState(false);

  const movieID = useParams();

  const handleError = (error) => {
    setSingleMovieError("Uh oh! Looks like something went wrong. Try again later.");
  };

  useEffect(() => {
    getSingleMovie(movieID.id)
      .then(data => {
        setSingleMovie(data.movie);
        return getSingleMovieVideos(movieID.id);
      })
      .then(data => {
        setSingleMovieVideos(data.videos);
      })
      .catch(handleError);
  }, [movieID.id]);

  const handleTrailerButtonClick = () => {
    setShowVideo(prevShowVideo => !prevShowVideo);
  };

  <button className="trailer-button" onClick={handleTrailerButtonClick}>
    {showVideo ? "Close Trailer" : "Watch Trailer"}
  </button>


  if (singleMovieError) {
    return (
      <h2>Uh oh! Looks like something went wrong. Try again later.</h2>
    );
  }

  return (
    <div id="focus-container" style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${singleMovie.backdrop_path}')`
    }}>
      <div className="focus-text-content" id="focus-text-content">

        <h2>{singleMovie.title}</h2>
        <h3>{singleMovie.tagline}</h3>
        <p><span className="label">overview:</span> {singleMovie.overview}</p>
        <p><span className="label">average rating:</span> {singleMovie.average_rating}/10</p>
        <p><span className="label">runtime:</span> {singleMovie.runtime} minutes</p>
        <p><span className="label">genre(s):</span> {singleMovie.genres ? singleMovie.genres.join(", ") : "N/A"}</p>
        <p><span className="label">release date:</span> {singleMovie.release_date}</p>

        <div className="button-container">
          <button className={`trailer-button ${showVideo ? "active" : ""}`} onClick={handleTrailerButtonClick}>
            <span className={`play-icon ${showVideo ? "green" : ""}`}></span>
            {showVideo ? "Close Trailer" : "Watch Trailer"}
          </button>
        </div>
        <NavLink to="/">
          <button className="back-button" aria-label="Go Back" onClick={toggleSearch}></button>
        </NavLink>
      </div>
      <img src={singleMovie.backdrop_path} alt={singleMovie.title} />
      {showVideo && (
        <div className="video-container">
          {singleMovieVideos.length > 0 && singleMovieVideos[0].site === "YouTube" && (
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${singleMovieVideos[0].key}`}
              allowFullScreen
            ></iframe>
          )}
        </div>
      )}
    </div>
  );
};

export default Focus;
