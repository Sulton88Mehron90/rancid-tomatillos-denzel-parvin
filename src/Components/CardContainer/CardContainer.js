import Card from "../Card/Card";
import "../CardContainer/CardContainer.css"
import PropTypes from 'prop-types';

function CardContainer({movies, search, filter, toggleSearch}) {
  let allMovies = [];
  let filtered = [];

  if(search){
    filtered = filter.map(filteredMovie => {
      return (
        <div className='movie-card' key={filteredMovie.id}>
            <Card 
              title = {filteredMovie.title}
              img = {filteredMovie.poster_path}
              rating = {filteredMovie.average_rating}
              id = {filteredMovie.id}
              toggleSearch={toggleSearch}
              />
          </div>
        )  
      })
    } else {
      allMovies = movies.map(movie => {
      return (
        <div className='movie-card' key={movie.id}>
          <Card 
            title = {movie.title}
            img = {movie.poster_path}
            rating = {movie.average_rating}
            id = {movie.id}
            toggleSearch={toggleSearch}
          />
        </div>
      )
    })
  }
  
  return (
    <div className="card-container">
      {allMovies}
      {filtered}
    </div>
  );
}

export default CardContainer;

CardContainer.propTypes = {
  movies: PropTypes.array.isRequired
};