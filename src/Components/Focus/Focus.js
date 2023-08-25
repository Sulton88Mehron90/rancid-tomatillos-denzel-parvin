import { getSingleMovie } from "../ApiCalls";
import { useEffect, useState } from "react";

function Focus() {
  const [singleMovie, setSingleMovie] = useState({})

  useEffect(() => {
    getSingleMovie(724495)
    .then(data => setSingleMovie(data.movie))
  }, [])

  console.log(singleMovie)

  return
}

export default Focus;