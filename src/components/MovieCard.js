import React from "react";
import { MOVIE_POSTER_URL } from "../utils/constants";

const MovieCard = ({ posterURL }) => {
  //console.log(posterURL);
  return (
    <div className="w-48 pr-4">
      <img src={MOVIE_POSTER_URL + posterURL} alt="Movie poster"></img>
    </div>
  );
};

export default MovieCard;
