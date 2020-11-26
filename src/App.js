import React, { useState } from "react";
import { moviesData } from "./data";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(1);

  //Add movie
  const addMovie = (newMovie) => setMovies([...movies, newMovie]);

  //HandleSearch
  const handleSearch = (event) => setSearch(event.target.value);

  //SetRating
  const handleRating = (rate) => setRate(rate);

  // filter movie 
  // filter movie returns a filtred array 
  const filterMovie = () => {
    return movies.filter(
      (movie) =>
        movie.name.toLowerCase().includes(search.toLowerCase().trim()) &&
        movie.rating >= rate
    );
  };

  return (
    <div>
      <Search
        search={search}
        rate={rate}
        handleRating={handleRating}
        handleSearch={handleSearch}
      />
      <MovieList movies={filterMovie()} />
      <AddMovie addMovie={addMovie} />
    </div>
  );
}

export default App;
