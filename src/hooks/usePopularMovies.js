import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  //const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1
  const getPopularMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        API_OPTIONS
      );

      const json = await data.json();
      //console.log("🚀 ~ getPopularMovies ~ json:", json);
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.error("Error Fetching movies ", error);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
