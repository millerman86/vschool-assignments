import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(5)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  function handleChange(e) {
    const { value } = e.target;
    setText(value)
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(' ');
    const filteredWords = wordsArr.filter(word => word !== "")
    return filteredWords.length
  }

  function startClock() {
    setIsTimeRunning(true)
    setTimeRemaining(5)
    setText('')
  }

  function endGame() {
    setIsTimeRunning(false)
    const numWords = calculateWordCount(text)
    setWordCount(numWords)
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    } else if (timeRemaining === 0) {
      endGame()
    }
  }, [timeRemaining, isTimeRunning])


  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea disabled={!isTimeRunning} onChange={handleChange} value={text} />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={startClock} disabled={isTimeRunning}>Start</button>
      <h1>Word Count: ???</h1>
    </div>
  );
}

export default App;
