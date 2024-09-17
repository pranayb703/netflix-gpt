import React from "react";
import { BACKGROUND } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const selectedLang = useSelector((store) => store.config.lang);
  //console.log(" selectedLang ", selectedLang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="border-black p-4 m-4 col-span-9"
          placeholder={lang[selectedLang].gptSearchPlaceHolder}
        ></input>
        <button className="p-2 m-4 bg-red-500 text-white rounded-lg col-span-3 ">
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
