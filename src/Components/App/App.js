import './App.css';
import { getMovies } from '../ApiCalls';
import { useEffect, useState } from 'react';
// import Card from '../Card/Card';
import CardContainer from '../CardContainer/CardContainer';
import Focus from '../Focus/Focus';
import '../../Tomatillo.png';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies()
    .then(data => setMovies(data.movies))
    .catch(err => {
      console.error("Error fetching movies:", err);
    });
  }, [])

  // console.log("Data from API:", movies)

  return (
    <main>
      <nav>
        <h1>Rancid Tomatillos</h1>
      </nav>
      <div className="main-container">
        <CardContainer movies={movies}/>
      </div>
      <div>
        <Focus />
      </div>
    </main>
  )
}

export default App;