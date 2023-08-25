// export function getMovies() {
//   return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
//   .then(res => res.json())
//   // .then(data => data)
// }

export function getMovies() {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
// throw new Error(...): This throws a new Error object, which can be caught in a .catch() block or a try/catch statement. Throwing an error will break out of the current function and go straight to the nearest error-handling block.
// `HTTP error! status: ${response.status}`: This is a template literal that creates a string. It will replace ${response.status} with the actual HTTP status code returned by the server. For example, if a 404 status code is returned, the error message would be "HTTP error! status: 404".

// https://rancid-tomatillos.herokuapp.com/api/v2/movies/:movie_id

export function getSingleMovie(id) {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  .then(res => res.json())
}