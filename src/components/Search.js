import React from "react";
import StarRating from "./StarRating";

const Search = ({ rate, search, handleSearch, handleRating }) => {
  return (
    <div className="header-container">
      <h1>MovieApp</h1>
      <div className="search-container">
        <input
          onChange={(event) => handleSearch(event)}
          value={search}
          type="text"
          placeholder="search for a movie ....."
        />
        <StarRating movieRating={rate} handleRating={handleRating} />
      </div>
    </div>
  );
};

export default Search;
