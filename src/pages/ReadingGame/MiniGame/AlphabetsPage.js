import React, { useState, useEffect } from "react";
import a from "../../../Assets/Audio/alphabets/a.mp3";
import b from "../../../Assets/Audio/alphabets/b.mp3";
import c from "../../../Assets/Audio/alphabets/c.mp3";
import d from "../../../Assets/Audio/alphabets/d.mp3";
import e from "../../../Assets/Audio/alphabets/e.mp3";
import f from "../../../Assets/Audio/alphabets/f.mp3";
import g from "../../../Assets/Audio/alphabets/g.mp3";
import h from "../../../Assets/Audio/alphabets/h.mp3";
import i from "../../../Assets/Audio/alphabets/i.mp3";
import j from "../../../Assets/Audio/alphabets/j.mp3";
import k from "../../../Assets/Audio/alphabets/k.mp3";
import l from "../../../Assets/Audio/alphabets/l.mp3";
import m from "../../../Assets/Audio/alphabets/m.mp3";
import n from "../../../Assets/Audio/alphabets/n.mp3";

import BoxComponent from "../Components/TextBoxComponents";

function AlphabetsGame() {
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
    { numberText: "A", audioUrl: a },
    { numberText: "B", audioUrl: b },
    { numberText: "C", audioUrl: c },
    { numberText: "D", audioUrl: d },
    { numberText: "E", audioUrl: e },
    { numberText: "F", audioUrl: f },
    { numberText: "G", audioUrl: g },
    { numberText: "H", audioUrl: h },
    { numberText: "I", audioUrl: i },
    { numberText: "J", audioUrl: j },
    { numberText: "K", audioUrl: k },
    { numberText: "L", audioUrl: l },
    { numberText: "M", audioUrl: m },
    { numberText: "N", audioUrl: n },
    { numberText: "O", audioUrl: n },
    { numberText: "P", audioUrl: n },
    { numberText: "Q", audioUrl: n },
    { numberText: "R", audioUrl: n },
    { numberText: "S", audioUrl: n },
    { numberText: "T", audioUrl: n },
    { numberText: "U", audioUrl: n },
    { numberText: "V", audioUrl: n },
    { numberText: "W", audioUrl: n },
    { numberText: "X", audioUrl: n },
    { numberText: "Y", audioUrl: n },
    { numberText: "Z", audioUrl: n },
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
  }, [colors, details]);
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
        <h1 className="text-[2.6rem] uppercase text-[#C770F0]">ABC</h1>
        <div className="w-[80%] flex flex-wrap justify-center gap-2 m-auto p-4">
          {detaislWithColor.map((element) => (
            <BoxComponent
              text={element["numberText"]}
              text_color="text-black"
              bg_color={`bg-[${element["color"]}]`}
              audio-url={element["audioUrl"]}
            />
          ))}
        </div>
      </section>
    </>
  );
}
export default AlphabetsGame;
