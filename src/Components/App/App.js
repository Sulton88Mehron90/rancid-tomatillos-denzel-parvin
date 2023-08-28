import './App.css';
import '../Navbar/Navbar.css'
import { getMovies } from '../ApiCalls';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import CardContainer from '../CardContainer/CardContainer';
import Focus from '../Focus/Focus';
import Navbar from '../Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies()
    .then(data => setMovies(data.movies))
    .catch(err => {
      console.error("Error fetching movies:", err);
    });
  }, [])

  console.log("Data All movies from API:", movies)

  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" className="main-container" element={
          <CardContainer movies={movies}/>
        }>
        </Route>
        <Route path="/movies/:id" element={
          <Focus />
        }>
        </Route>
      </Routes>
    </main>
  )
}

export default App;