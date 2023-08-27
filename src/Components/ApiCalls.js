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
// https://rancid-tomatillos.herokuapp.com/api/v2/movies/:movie_id

export function getSingleMovie(id) {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
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
