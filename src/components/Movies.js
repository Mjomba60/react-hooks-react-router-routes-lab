import React from "react";
import { movies } from "../data";

function Movies() {

  const singleMovie = movies.map(movie => {
    const singleGenre = movie.genres.map(genre => {
      return <li key={genre}>{genre}</li>
    })
    return <div key={movie.title}>
      <h3>Name: {movie.title}</h3>
      <p>Time: {movie.time}</p>
      <p>Genres:</p>
      <ul>
        {singleGenre}
      </ul>

    </div>
  })

  return <div>
    <h1>Movies Page</h1>
    {singleMovie}
  </div>;
}

export default Movies;
