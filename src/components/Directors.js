import React from "react";
import { directors } from "../data";

function Directors() {

  const singleDirector = directors.map(director => {
    const singleMovie = director.movies.map(movie => {
      return <li key={movie}>{movie}</li>
    })

    return <div key={director.name}>
      <h3>Name: {director.name}</h3>
      <p>Movies:</p>
      <ul>
      {singleMovie}
      </ul>
    </div>
  })

  return <>
    <h1>Directors Page</h1>
    {singleDirector}
  </>;
}

export default Directors;
