import Card from "../Card/Card";
import "../CardContainer/CardContainer.css"

function CardContainer({movies}) {
  let allMovies = [];

  allMovies = movies.map(movie => {
    return (
      <div key={movie.id}>
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