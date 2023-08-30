import './App.css';
import '../Navbar/Navbar.css'
import { getMovies } from '../ApiCalls';
import { useEffect, useState } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import Focus from '../Focus/Focus';
import Navbar from '../Navbar/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import ErrorHandling from '../ErrorHandling/ErrorHandling';
import Error500 from '../ErrorHandling/Error500';

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getMovies()
      .then(data => {
        if (data && data.movies) {
          setMovies(data.movies);
          setError('');
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.log('Caught error:', error.message);  // console
        if (error.message === '500') {
          setError('500');
        } else if (error.message === '404') {
          setError('404');
        } else {
          setError('Other');
        }
        setIsLoading(false);
      });
  }, []);

  console.log("Data All movies from API:", movies)

  if (isLoading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error === '404') {
    return <ErrorHandling />;
  } else if (error === '500') {
    return <Error500 />;
  } else if (error) {
    return <h2>Uh oh! Looks like something went wrong. Try again later.</h2>;
  }

  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" className="main-container" element={
          <CardContainer movies={movies} />
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
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>
    </main>
  )
}

export default App;