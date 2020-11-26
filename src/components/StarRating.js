import React from "react";

const StarRating = ({ movieRating, handleRating }) => {
  const stars = (rate) => {
    let stars = [];
    for (let i = 1; i < 6; i++) {
      if (i <= rate) {
        stars.push(
          <span
            onClick={() => handleRating(i)}
            style={{ color: "#FFC200", cursor: "pointer", fontSize: "20px" }}
          >
            ★
          </span>
        );
      } else {
        stars.push(
          <span
            onClick={() => handleRating(i)}
            style={{ color: "black", cursor: "pointer", fontSize: "20px" }}
          >
            ★
          </span>
        );
      }
    }

    return stars;
  };

  return <div> {stars(movieRating)} </div>;
};

StarRating.defaultProps = {
  movieRating: 0,
  handleRating: () => {},
};

export default StarRating;
