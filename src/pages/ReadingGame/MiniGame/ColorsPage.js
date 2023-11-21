import React, { useState, useEffect } from "react";
import black from "../../../Assets/Audio/colors/black.mp3";
import red from "../../../Assets/Audio/colors/red.mp3";
import green from "../../../Assets/Audio/colors/green.mp3";
import yellow from "../../../Assets/Audio/colors/yellow.mp3";
import blue from "../../../Assets/Audio/colors/blue.mp3";
import purple from "../../../Assets/Audio/colors/purple.mp3";
import orange from "../../../Assets/Audio/colors/orange.mp3";
import pink from "../../../Assets/Audio/colors/pink.mp3";


import playAudio from "../../../components/CommonFunction/PlayAudio";
import BoxComponent from "../Components/TextBoxComponents";

function ColorsGame() {
  const [details, setDetails] = useState([
    { text: "red", audioUrl: red },
    { text: "yellow", audioUrl: yellow },
    { text: "orange", audioUrl: orange },
    { text: "blue", audioUrl: blue },
    { text: "green", audioUrl: green },
    { text: "pink", audioUrl: pink },
    { text: "purple", audioUrl: purple },
    { text: "red", audioUrl: red },
    { text: "yellow", audioUrl: yellow },
    { text: "orange", audioUrl: orange },
    { text: "blue", audioUrl: blue },
    { text: "green", audioUrl: green },
    { text: "pink", audioUrl: pink },
    { text: "purple", audioUrl: purple },
  ]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      ></link>
      <section
        style={{
          position: "relative",
          zIndex: "-2",
          paddingTop: "5rem",
          minHeight :'100vh',
        }}
        className=""
      >
        <h1 className="text-[2.6rem] uppercase text-[#C770F0]">COLOR Page</h1>
        <div className="w-[80%] flex flex-wrap justify-center gap-2 m-auto p-4">
          {details.map((element) => (
            <BoxComponent
              text={element["text"]}
              text_color = {`text-green-100`}
              bg_color={`bg-${element["text"]}-600`}
              audio-url={element["audioUrl"]}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default ColorsGame;
