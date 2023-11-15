import React, { useState, useEffect } from "react";
import "./style.css"

import { useTimer } from 'react-timer-hook';





function MathGamee() {
  function MyTimer({ expiryTimestamp }) {
    const {
      totalSeconds,
      seconds,
      minutes,
      hours,
      days,
      restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  
  
    return (
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '100px' }}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
        <button onClick={() => {
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300);
          restart(time)
        }}>Restart</button>
      </div>
    );
  }
  


  const questionL1 = [
    {
      question: '1 + 1',
      choices: ['2', '21', '1', 'None of the above'],
      type: 'MCQs',
      correctAnswer: '2',
    },
    {
      question: '2 + 1',
      choices: ['2', '3', '1', 'None of the above'],
      type: 'MCQs',
      correctAnswer: '3',
    },
    {
      question: '3 + 1',
      choices: ['2', '21', '4', 'None of the above'],
      type: 'MCQs',
      correctAnswer: '4',
    },
    {
      question: '12 + 1',
      choices: ['2', '21', '1', 'None of the above'],
      type: 'MCQs',
      correctAnswer: 'None of the above',
    },
    {
      question: '10 + 1',
      choices: ['2', '21', '1', 'None of the above'],
      type: 'MCQs',
      correctAnswer: 'None of the above',
    },
    {
      question: '10 + 2',
      choices: ['2', '21', '12', 'None of the above'],
      type: 'MCQs',
      correctAnswer: 'None of the above',
    },
  ]

  const questionL2 = [
    {
      question: '1 + 1',
      choices: ['2', '21', '1', 'None of the above'],
      type: 'MCQs',
      correctAnswer: '2',
    },
    {
      question: '2 + 1',
      choices: ['2', '3', '1', 'None of the above'],
      type: 'MCQs',
      correctAnswer: '3',
    },
    {
      question: '3 + 1',
      choices: ['2', '21', '4', 'None of the above'],
      type: 'MCQs',
      correctAnswer: '4',
    },
    {
      question: '12 + 1',
      choices: ['2', '21', '1', 'None of the above'],
      type: 'MCQs',
      correctAnswer: 'None of the above',
    },
    {
      question: '10 + 1',
      choices: ['2', '21', '1', 'None of the above'],
      type: 'MCQs',
      correctAnswer: 'None of the above',
    },
    {
      question: '11 + 1',
      choices: ['12', '21', '1', 'None of the above'],
      type: 'MCQs',
      correctAnswer: '2',
    },
    {
      question: '12 + 1',
      choices: ['2', '13', '1', 'None of the above'],
      type: 'MCQs',
      correctAnswer: '3',
    },
    {
      question: '13 + 1',
      choices: ['2', '21', '14', 'None of the above'],
      type: 'MCQs',
      correctAnswer: '4',
    },
    {
      question: '12 + 11',
      choices: ['2', '21', '1', 'None of the above'],
      type: 'MCQs',
      correctAnswer: 'None of the above',
    },
    {
      question: '10 + 11',
      choices: ['2', '21', '1', 'None of the above'],
      type: 'MCQs',
      correctAnswer: 'None of the above',
    },
  ]


  const [questions, setquestion] = useState(questionL1);

  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })


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
      console.log(questions.length, "length")
      setActiveQuestion((prev) => prev + 1)
    } else {
      if (activeQuestion === questions.length - 1) {
        setquestion(questionL2)
        setActiveQuestion((prev) => prev + 1)
      } else {
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
    console.log("bshfgusefyuklg", result);
    if (result.correctAnswers === 5) {
      setquestion(questionL2);
    } 
	}, [activeQuestion]);
  useEffect(() => {
    console.log(time,"timeleft")
  },[time]);

  const newGame =() =>{
    window.location.reload(false)
  }

  const NewGame=() =>{
    console.log("newgame")
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
      </>
    )
  }

    return (
        <div className="MathGame">
           <div className="quiz-container" style={{height:"100vh", marginTop:"5rem"}}>
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
          <button onClick={newGame}> newgame</button>
        </div>
      )}
    </div>

    <MyTimer expiryTimestamp={time} />
        </div>
    );
}

export default MathGamee;