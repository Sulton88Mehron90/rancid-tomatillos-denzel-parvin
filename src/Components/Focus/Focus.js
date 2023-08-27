import { getSingleMovie } from "../ApiCalls";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Focus() {
  const [singleMovie, setSingleMovie] = useState({})

  const movieID = useParams();
  console.log('movieID', movieID)

  useEffect(() => {
    getSingleMovie(movieID.id)
    .then(data => setSingleMovie(data.movie))
  }, [])

  console.log("singleMovie after Fetch",singleMovie)

// average_rating: 8
// backdrop_path: "https://image.tmdb.org/t/p/original//olPXihyFeeNvnaD6IOBltgIV1FU.jpg"
// budget: 17000000
// genres: (3) ['Horror', 'Mystery', 'Thriller']
// id: 882598
// overview: "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality."
// poster_path: "https://image.tmdb.org/t/p/original//aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg"
// release_date: "2022-09-23"
// revenue: 214000000
// runtime: 115
// tagline: "Once you see it, it’s too late."
// title: "Smile"

  return (
    <div id={singleMovie.id}>
      <h2>{singleMovie.title}</h2>
      <h3>{singleMovie.tagline}</h3>
      <p>overview: {singleMovie.overview}</p>
      <p>average rating: {singleMovie.average_rating}/10</p>
      <p>runtime: {singleMovie.runtime} minutes</p>
      <p>genre(s): {singleMovie.genres}</p>
      <p>release date: {singleMovie.release_date}</p>
      <img src={singleMovie.backdrop_path} alt={singleMovie.title} />
    </div>
  )
}

export default Focus;