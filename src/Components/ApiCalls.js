const API_ENDPOINT = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/';

export function getMovies() {
  return fetch(API_ENDPOINT)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status.toString());
      }
      return response.json();
    })
}

export function getSingleMovie(id) {
  return fetch(`${API_ENDPOINT}${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status.toString());
      }
      return response.json();
    })
};