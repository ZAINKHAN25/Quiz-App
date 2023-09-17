import React, { useState } from "react";
import Result from "./result.js";

function Mainquiz({ selectedquestionsarea }) {
  const [indexofquestion, setindexofquestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if the quiz is submitted
  const [answerSelected, setAnswerSelected] = useState(false); // Track if an answer is selected

  const handleNextQuestion = () => {
    if (indexofquestion < selectedquestionsarea.data.length - 1) {
      setindexofquestion((prevIndex) => prevIndex + 1);
      setAnswerSelected(false); // Reset answerSelected when moving to the next question
    } else {
      // Set isSubmitted to true when all questions are answered
      setIsSubmitted(true);
    }
  };

  const handleAnswerSelect = (selectedAnswer) => {
    selectedAnswers[indexofquestion] = selectedAnswer;
    setSelectedAnswers([...selectedAnswers]);
    setAnswerSelected(true); // Set answerSelected to true when an answer is selected
  };

  // Helper function to calculate the score
  const calculateScore = (selectedAnswers, questions) => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (selectedAnswers[i] === questions[i].correctAnswer) {
        score++;
      }
    }
    return score;
  };

  // Display the result when the quiz is submitted
  if (isSubmitted) {
    return (
      <Result
        score={calculateScore(selectedAnswers, selectedquestionsarea.data)}
        totalQuestions={selectedquestionsarea.data.length}
      />
    );
  }

  const question = selectedquestionsarea.data[indexofquestion];

  return (
    <div className="container mainquizpage flex-column align-items-start">
      <h1 className="mb-5 fs-1">Question Number {indexofquestion + 1}</h1>
      <p className="fs-5">{question.question}</p>
      <ul>
        {question.answers.map((answer, index) => (
          <div className="fs-6" key={index}>
            <label>
              <input
                type="radio"
                className="me-2"
                name={`question-${indexofquestion}`}
                value={answer}
                onChange={() => handleAnswerSelect(answer)}
                checked={selectedAnswers[indexofquestion] === answer}
              />
              {answer}
            </label>
          </div>
        ))}
      </ul>
      <div>
        {answerSelected && ( // Only display the button if an answer is selected
          <button
            className="btn mt-3 mx-2 btnbackgroundGreen fs-5"
            onClick={handleNextQuestion}
          >
            {indexofquestion < selectedquestionsarea.data.length - 1
              ? "Next Question"
              : "Submit"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Mainquiz;
