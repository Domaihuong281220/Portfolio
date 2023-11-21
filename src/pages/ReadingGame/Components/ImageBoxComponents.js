import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import playAudio from "../../../components/CommonFunction/PlayAudio";

function ImageBoxComponent(props) {
  console.table(props);

  return (
    <div
      onClick={() => playAudio(props['audio-url'])}
      className={`w-[300px] h-[350px] py-5 hover:py-3 text-slate-800 rounded-3xl items-center justify-center flex flex-col bg-white`}
    >
      <img
        src={`${props['images-url']}`}
        className="w-[80%] h-[80%] hover:w-full hover:h-full hover:duration-300 flex justify-center items-center  rounded-3xl"
      />
      <span className="text-5xl font-bold hover:text-7xl hover:font-[550] hover:duration-300 ease-in-out capitalize">
        {props['text']}
      </span>
    </div>
  );
}

export default ImageBoxComponent;
