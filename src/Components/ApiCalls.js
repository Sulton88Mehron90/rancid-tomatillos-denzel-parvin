export function getMovies() {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(res => res.json())
  // .then(data => data)
}

