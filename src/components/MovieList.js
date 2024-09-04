import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //console.log(movies);
  //https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
  return (
    <div className="px-2">
      <h1 className="text-2xl py-4  text-white ">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterURL={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
