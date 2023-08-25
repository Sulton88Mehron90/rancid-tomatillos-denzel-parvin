// import './App.css';
import { getMovies } from '../ApiCalls';
import { useEffect, useState } from 'react';
// import Card from '../Card/Card';
import CardContainer from '../CardContainer/CardContainer';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies()
    .then(data => setMovies(data.movies))
    .catch(err => {
      console.error("Error fetching movies:", err);
    });
  }, [])

  console.log("Data from API:", movies)

  return (
    <main>
      <nav>
        <h1>Rancid Tomatillos</h1>
      </nav>
      <CardContainer movies={movies}/>
    </main>
  )
}

export default App;