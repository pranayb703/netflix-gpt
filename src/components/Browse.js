import { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { BACKGROUND } from "../utils/constants";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="">
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
        // Main video container 
          - Video BACKGROUND
          - Video Title

        // Movie List Container
          - Movie multple lists * n
          - Many movie cards * n
      */}
    </div>
  );
};

export default Browse;
