import React, { useState, useEffect } from "react";
import ContainerStyle from "./Components/ContainerComponents";

function ReadingGame() {
  const [colors, setColors] = useState([
    "#ff80ff",
    "#5AC3B0",
    "#F7CD46",
    "#FDF5DF",
    "#5EBEC4",
    "#D6A3FB",
    "#4dff4d",
    '#ff704d',
    '#ff6666',
    '#FEFEFE',
    '#F8E5E5',
  ]);
  const [texts, setTexts] = useState([
    { text: "Colors", path: "/colorsgame" },
    { text: "123", path: "/numbersgame" },
    { text: "ABC", path: "/alphabetsgame" },
    { text: "Animals", path: "/animalsgame" },
    { text: "Vehical", path: "/colorsgame" },
  ]);
  const [textWithColors, setTextWithColors] = useState([]);

  const shuffleArray = (texts, colors) => {
    const shuffledColors = colors.sort(() => 0.5 - Math.random());
    return texts.map((e, i) => {
      return { ...e, color: shuffledColors[i] };
    });
  };

  useEffect(() => {
    setTextWithColors(shuffleArray(texts, colors));
  }, [colors, texts]);

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
          height: "100vh",
        }}
        className=""
      >
        <h1 className="text-[2.6rem] uppercase text-[#C770F0]">Reading Game</h1>
        {textWithColors.map((element) => (
          <ContainerStyle
            text={element["text"]}
            bg-color={`bg-[${element["color"]}]`}
            path={element["path"]}
          />
        ))}
      </section>
    </>
  );
}

export default ReadingGame;
