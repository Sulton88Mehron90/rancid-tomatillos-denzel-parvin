import Card from "../Card/Card";
import "../CardContainer/CardContainer.css"
import PropTypes from 'prop-types';

function CardContainer({movies, search, filter, toggleSearch}) {
  const allMovies = movies.map(movie => (
    <div className='movie-card' aria-label={`Go to details for ${movie.title}`} key={movie.id}>
      <Card 
        title = {movie.title}
        img = {movie.poster_path}
        rating = {movie.average_rating}
        id = {movie.id}
        toggleSearch={toggleSearch}
      />
    </div>
  ));

  const filteredMovies = filter.map(filteredMovie => (
    <div className='movie-card' key={filteredMovie.id}>
      <Card 
        title = {filteredMovie.title}
        img = {filteredMovie.poster_path}
        rating = {filteredMovie.average_rating}
        id = {filteredMovie.id}
        toggleSearch={toggleSearch}
      />
    </div>
  ));

  return (
    <div className="card-container">
      {search && filteredMovies}
      {!search && allMovies}
    </div>
  );
};

CardContainer.propTypes = {
  movies: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired,
  filter: PropTypes.array.isRequired,
  toggleSearch: PropTypes.func.isRequired
};

export default CardContainer;