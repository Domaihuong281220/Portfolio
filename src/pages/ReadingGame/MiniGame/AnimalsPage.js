import React, { useState, useEffect } from "react";
// import animals image
import Alligator from "../../../Assets/Animals/alligator.png";
import Bear from "../../../Assets/Animals/bear.png";
import Bird from "../../../Assets/Animals/bird.png";
import Cat from "../../../Assets/Animals/cat.png";
import Dog from "../../../Assets/Animals/dog.png";
import Elephant from "../../../Assets/Animals/elephant.png";
import Fish from "../../../Assets/Animals/fish.png";
import Fox from "../../../Assets/Animals/fox.png";
import giraffe from "../../../Assets/Animals/giraffe.png";
import horse from "../../../Assets/Animals/horse.png";
import leopard from "../../../Assets/Animals/leopard.png";
import lion from "../../../Assets/Animals/lion.png";
import monkey from "../../../Assets/Animals/monkey.png";
import panda from "../../../Assets/Animals/panda.png";
import snake from "../../../Assets/Animals/snake.png";
import tiger from "../../../Assets/Animals/tiger.png";
// import animals sound
import AlligatorSound from "../../../Assets/Audio/colors/yellow.mp3";

import ImageBoxComponent from "../Components/ImageBoxComponents";

function AnimalsGame() {
  const animalData = [
    {
      animalName: "Alligator",
      animalImg: Alligator,
      animalSound: AlligatorSound,
    },
    { animalName: "Bear", animalImg: Bear, animalSound: AlligatorSound },
    { animalName: "Bird", animalImg: Bird, animalSound: AlligatorSound },
    { animalName: "Cat", animalImg: Cat, animalSound: AlligatorSound },
    { animalName: "Dog", animalImg: Dog, animalSound: AlligatorSound },
    {
      animalName: "Elephant",
      animalImg: Elephant,
      animalSound: AlligatorSound,
    },
    { animalName: "Fish", animalImg: Fish, animalSound: AlligatorSound },
    { animalName: "fox", animalImg: Fox, animalSound: AlligatorSound },
    { animalName: "giraffe", animalImg: giraffe, animalSound: AlligatorSound },
    { animalName: "horse", animalImg: horse, animalSound: AlligatorSound },
    { animalName: "leo pard", animalImg: leopard, animalSound: AlligatorSound },
    { animalName: "lion", animalImg: lion, animalSound: AlligatorSound },
    { animalName: "monkey", animalImg: monkey, animalSound: AlligatorSound },
    { animalName: "panda", animalImg: panda, animalSound: AlligatorSound },
    { animalName: "snake", animalImg: snake, animalSound: AlligatorSound },
    { animalName: "tiger", animalImg: tiger, animalSound: AlligatorSound },
  ];

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
        <h1 className="text-[2.6rem] uppercase text-[#C770F0]">Animals</h1>
        <div className="w-[80%] flex flex-wrap justify-center gap-2 m-auto p-4">
          {animalData.map((element) => (
            <ImageBoxComponent
              text={element["animalName"]}
              images-url={element["animalImg"]}
              audio-url={element["animalSound"]}
            />
          ))}
        </div>
      </section>
    </>
  );
}
export default AnimalsGame;
