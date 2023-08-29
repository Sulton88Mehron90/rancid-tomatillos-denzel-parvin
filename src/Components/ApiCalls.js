export function getMovies() {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status.toString());
      }
      return response.json();
    })
    // .catch(error => {
    //   console.error("There was a problem with the fetch operation:", error);
    // });
}

export function getSingleMovie(id) {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status.toString());
      }
      return response.json();
    })
    // .catch(error => {
    //   console.error("There was a problem with the fetch operation:", error);
    // });
}


// Error Propagation: By removing the .catch() block in the getMovies() and getSingleMovie() functions, you've allowed the error to propagate up to the useEffect() where it's caught and then used to set the error state.

// Centralized Error Handling: Centralizing your error handling allows you to manage all types of errors in one place. It makes it easier to show error messages or error pages.