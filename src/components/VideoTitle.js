import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-tr from-black">
      <h1 className="text-4xl text-white">{title}</h1>
      <p className="py-4 text-sm w-1/4 text-white">{overview}</p>
      <div className="">
        <button className="bg-white w-30 py-2 px-4 rounded-md  mr-4 hover:opacity-80">
          ▶️ Play
        </button>
        <button className=" bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-neutral-600 opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
