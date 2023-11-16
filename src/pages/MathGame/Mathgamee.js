import React, { useState, useEffect } from "react";
import "./style.css"

import { useTimer } from 'react-timer-hook';

import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import questionL1 from "./QuestionL1"
import questionL2 from "./QuestionL2"
import questionL3 from "./QuestionL3"
import questionL4 from "./QuestionL4"
import questionL5 from "./QuestionL5"






function MathGamee() {

  const QuestionLevel1= getMultipleRandom(questionL1, 5)
  const QuestionLevel2= getMultipleRandom(questionL2, 10)
  const QuestionLevel3= getMultipleRandom(questionL3, 15)
  const QuestionLevel4= getMultipleRandom(questionL4, 20)
  const QuestionLevel5= getMultipleRandom(questionL5, 25)



  const [questions, setquestion] = useState(QuestionLevel1);

  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })


  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
  
    return shuffled.slice(0, num);
  }
  
  const { question, choices, correctAnswer } = questions[activeQuestion]

  const onClickNext = () => {
    setSelectedAnswerIndex(null)
    setResult((prev) =>
      selectedAnswer
        ? {
          ...prev,
          score: prev.score + 5,
          correctAnswers: prev.correctAnswers + 1,
        }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    )
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      if (selectedAnswer===true) {
          if (result.correctAnswers === 4){
              setquestion(QuestionLevel2)
              setActiveQuestion((prev) => prev + 1)  
          }
          else{
              if (result.correctAnswers === 9){
                  setquestion(QuestionLevel3)
                  setActiveQuestion((prev) => prev + 1)
                }
                else {
                  if (result.correctAnswers === 14){
                    setquestion(QuestionLevel4)
                    setActiveQuestion((prev) => prev + 1)
                  }
                  else {
                    if (result.correctAnswers === 19){
                      setquestion(QuestionLevel5)
                      setActiveQuestion((prev) => prev + 1)
                    }
                    else {
                      setActiveQuestion(0)
                    setShowResult(true)
                    }
                  }
                }
              }
          }
          else {
            setActiveQuestion(0)
                    setShowResult(true)
          }
      }
  }

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index)
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
    } else {
      setSelectedAnswer(false)
    }
  }

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

  const time = new Date();
  time.setSeconds(time.getSeconds() + 60); // 1 minutes timer

  useEffect(() => {
    if (result.correctAnswers === 5) {
      setquestion(questionL2);
    }
  }, [activeQuestion]);

  const newGame = () => {
    window.location.reload(false)
  }

  const NewGame = () => {
    return (
      <>
        <div>
          <div>
            <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
            <span className="total-question">/{addLeadingZero(questions.length)}</span>
          </div>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex-right">
            <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
              Next
            </button>
          </div>
        </div>
        <div className="timer">
        <CountdownCircleTimer
          isPlaying
          duration={60}
          colors={['#07B207', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
          onComplete={() => {
            setActiveQuestion(0)
            setShowResult(true)
            return { shouldRepeat: false }
          }}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
        </div>
      </>
    )
  }

  return (
    <div className="MathGame">
      <div className="quiz-container" style={{ height: "100vh", marginTop: "5rem" }}>
        {!showResult ? (NewGame()) : (
          <div className="result">
            <h3>Result</h3>
            <p>
              Total Question: <span>{questions.length}</span>
            </p>
            <p>
              Total Score:<span> {result.score}</span>
            </p>
            <p>
              Correct Answers:<span> {result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers:<span> {result.wrongAnswers}</span>
            </p>
            <button onClick={newGame}> Restart</button>
          </div>
        )}
      </div>

      {/* <MyTimer expiryTimestamp={time} /> */}

    </div>
  );
}

export default MathGamee;