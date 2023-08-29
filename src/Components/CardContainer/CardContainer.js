import Card from "../Card/Card";
import "../CardContainer/CardContainer.css"
import PropTypes from 'prop-types';

function CardContainer({movies}) {
  let allMovies = [];

  allMovies = movies.map(movie => {
    return (
      <div className='movie-card' key={movie.id}>
        <Card 
          title = {movie.title}
          img = {movie.poster_path}
          rating = {movie.average_rating}
          id = {movie.id}
        />
      </div>
    )
  })
  return (
    <div className="card-container">
      {allMovies}
    </div>
  );
}

export default CardContainer;

CardContainer.propTypes = {
  movies: PropTypes.array.isRequired
};