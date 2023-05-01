import React from "react";
import { actors } from "../data";

function Actors() {

  const singleActor = actors.map(actor => {
    const singleMovie = actor.movies.map(movie => {
      return <li key={movie}>{movie}</li>
    })

    return <div key={actor.name}>
      <h3>Name: {actor.name}</h3>
      <p>Movies</p>
      <ul>
      {singleMovie}
      </ul>
    </div>
  })

  return <>
    <h1>Actors Page</h1>
    {singleActor}
  </>;
}

export default Actors;
