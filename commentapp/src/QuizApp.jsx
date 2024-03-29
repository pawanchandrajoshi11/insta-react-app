import React, { useState, useEffect } from 'react';
 
const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Rome'],
    answer: 'Paris'
  },
  {
    question: 'Who wrote "Romeo and Juliet"?',
    options: ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'Mark Twain'],
    answer: 'William Shakespeare'
  },
 
];
 
const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(2);
 
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
        console.log("time decreased");
      } else {
        handleNextQuestion();
        console.log("Else part triggered");
      }
    }, 1000);
 
    return () => {
      clearTimeout(timer);
      console.log("return function called"
      );
    }
  }, [timeLeft, currentQuestion]);
 
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
 
  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption('');
    setTimeLeft(2);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert( "Your Score is: "+score);
      setCurrentQuestion(0);
    }
  };
 
  return (
    <div>
      <h1>Quiz Application</h1>
      <div>
        <p>{questions[currentQuestion].question}</p>
        <ul>
          {questions[currentQuestion].options.map((option, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionSelect(option)}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
        <p>Time left: {timeLeft} seconds</p>
        <button onClick={handleNextQuestion}>Next</button>
      </div>
    </div>
  );
};
 
export default QuizApp;