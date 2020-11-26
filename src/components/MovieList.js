import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies && movies[0] ? (
        movies.map((el) => <MovieCard key={el.id} film={el} />)
      ) : (
        <h1>Oups No result :'(</h1>
      )}
    </div>
  );
};

export default MovieList;
