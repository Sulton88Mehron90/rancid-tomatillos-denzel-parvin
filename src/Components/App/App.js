import './App.css';
import '../Navbar/Navbar.css'
import { getMovies } from '../ApiCalls';
import { useEffect, useState } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import Focus from '../Focus/Focus';
import Navbar from '../Navbar/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import ErrorHandling from '../ErrorHandling/ErrorHandling';


function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('')

  useEffect(() => {
    getMovies()
    .then(data => setMovies(data.movies))
    .catch(error => {
      if(error.status === 500) {
        setError('Uh oh! Looks like something went wrong. Try again later.')
      } else {
        setError(error)
      }
    });
  }, [])

  console.log("Data All movies from API:", movies)

  if(error) {
    console.log('error', error)
    return (
      <h2>Uh oh! Looks like something went wrong. Try again later.</h2>
    )
  }

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
        <Route path="/404" element={
          <ErrorHandling />
        }>
        </Route>
        <Route path="*" element={<Navigate to="/404"/>}></Route>
      </Routes>
    </main>
  )
}

export default App;