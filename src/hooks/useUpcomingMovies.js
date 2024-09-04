import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  //const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1
  const getUpcomingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_OPTIONS
      );

      const json = await data.json();
      //console.log("🚀 ~ getUpcomingMovies ~ json:", json);
      dispatch(addUpcomingMovies(json.results));
    } catch (error) {
      console.error("Error Fetching movies ", error);
    }
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpComingMovies;
