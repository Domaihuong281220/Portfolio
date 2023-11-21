import React, { useState, useEffect } from "react";
import one from "../../../Assets/Audio/numbers/kid-1.mp3";
import two from "../../../Assets/Audio/numbers/kid-2.mp3";
import three from "../../../Assets/Audio/numbers/kid-3.mp3";
import four from "../../../Assets/Audio/numbers/kid-4.mp3";
import five from "../../../Assets/Audio/numbers/kid-5.mp3";
import six from "../../../Assets/Audio/numbers/kid-6.mp3";
import seven from "../../../Assets/Audio/numbers/kid-7.mp3";
import eight from "../../../Assets/Audio/numbers/kid-8.mp3";
import nine from "../../../Assets/Audio/numbers/kid-9.mp3";

import BoxComponent from "../Components/TextBoxComponents";

function NumbersGame() {
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
  const [details, setDetails] = useState([
    { numberText: "1", audioUrl: one },
    { numberText: "2", audioUrl: two },
    { numberText: "3", audioUrl: three },
    { numberText: "4", audioUrl: four },
    { numberText: "5", audioUrl: five },
    { numberText: "6", audioUrl: six },
    { numberText: "7", audioUrl: seven },
    { numberText: "8", audioUrl: eight },
    { numberText: "9", audioUrl: nine },
    { numberText: "10", audioUrl: nine },
    { numberText: "11", audioUrl: nine },
    { numberText: "12", audioUrl: nine },
    { numberText: "13", audioUrl: nine },
    { numberText: "14", audioUrl: nine },
    { numberText: "15", audioUrl: nine },
    { numberText: "numbers..", audioUrl: nine },
  ]);
  const [detaislWithColor, setDetaislWithColor] = useState([]);

  const shuffleArray = (details, colors) => {
    return details.map((e) => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      return { ...e, color: randomColor };
    });
  };

  useEffect(() => {
    setDetaislWithColor(shuffleArray(details, colors));
  }, [colors,details]);
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
          minHeight: "100vh",
        }}
        className=""
      >
        <h1 className="text-[2.6rem] uppercase text-[#C770F0]">123</h1>
        <div className="w-[80%] flex flex-wrap justify-center gap-2 m-auto p-4">
          {detaislWithColor.map((element) => (
            <BoxComponent
              text={element["numberText"]}
              bg_color={`bg-[${element["color"]}]`}
              audio-url={element["audioUrl"]}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default NumbersGame;
