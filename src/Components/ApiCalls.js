export function getMovies() {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status.toString());
      }
      return response.json();
    })
}

export function getSingleMovie(id) {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status.toString());
      }
      return response.json();
    })
};