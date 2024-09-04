import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  //fetch movie trailer
  const getMovieVideoTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos? `,
      API_OPTIONS
    );
    const json = await data.json();

    const trailers = json.results.filter((video) => video.type === "Trailer");
    const trailer = trailers.length ? trailers[0] : json.results[0];

    dispatch(addTrailer(trailer.key));
  };
  useEffect(() => {
    getMovieVideoTrailer();
  }, []);
  //return trailerKey;
};

export default useMovieTrailer;
