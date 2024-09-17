import React from "react";
import { BACKGROUND } from "../utils/constants";

const GPTSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="border-black p-4 m-4 col-span-9"
          placeholder="What would you like to watch today!!"
        ></input>
        <button className="p-2 m-4 bg-red-500 text-white rounded-lg col-span-3 ">
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
