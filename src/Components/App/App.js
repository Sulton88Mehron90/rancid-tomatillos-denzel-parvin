import './App.css';
import { getMovies } from '../ApiCalls';
import { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies()
    .then(data => setMovies(data.movies))
  }, [])

  console.log(movies)
  return (
    <h1>Rancid Tomatillos</h1>
  )
}

export default App;
