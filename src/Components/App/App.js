import './App.css';
import '../Navbar/Navbar.css'
import { getMovies } from '../ApiCalls';
import { useEffect, useState } from 'react';
// import Card from '../Card/Card';
import CardContainer from '../CardContainer/CardContainer';
import Focus from '../Focus/Focus';
import Navbar from '../Navbar/Navbar';


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
      <Navbar />
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