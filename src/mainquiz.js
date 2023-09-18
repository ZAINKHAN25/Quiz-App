import React, { useState } from "react";
import Result from "./result.js";

function Mainquiz({ selectedquestionsarea }) {
  const [indexofquestion, setindexofquestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if the quiz is submitted
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(-1); // Track the selected answer index

  const handleNextQuestion = () => {
    if (indexofquestion < selectedquestionsarea.data.length - 1) {
      setindexofquestion((prevIndex) => prevIndex + 1);
      setSelectedAnswerIndex(-1); // Reset selectedAnswerIndex when moving to the next question
    } else {
      // Set isSubmitted to true when all questions are answered
      setIsSubmitted(true);
    }
  };

  const handleAnswerSelect = (selectedAnswer, index) => {
    selectedAnswers[indexofquestion] = selectedAnswer;
    setSelectedAnswers([...selectedAnswers]);
    setSelectedAnswerIndex(index); // Set the selected answer index
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
    <div className="container mainquizpage flex-column align-items-start pt-2">
      <h1 className="mb-5 fs-1">Question Number {indexofquestion + 1}:</h1>
      <p className="fs-5 mt-1">{question.question}</p>
      <ol className="d-flex olofoptions flex-column align-items-start">
        {question.answers.map((answer, index) => (
          <div className="fs-6 divhp shadow" key={index}>
            <label className="my-1">
              <input
                type="radio"
                style={{ visibility: "hidden" }}
                name={`question-${indexofquestion}`}
                value={answer}
                onChange={() => handleAnswerSelect(answer, index)}
                checked={selectedAnswers[indexofquestion] === answer}
              />
              <li
                className={`ps-5 answerli py-2 ${
                  index === selectedAnswerIndex ? "backgroundtrue" : ""
                }`}
              >
                {answer}
              </li>
            </label>
          </div>
        ))}
      </ol>
      <div>
        {selectedAnswerIndex !== -1 && ( // Only display the button if an answer is selected
          <button
            className="btn my-3  mx-2 btnbackgroundGreen fs-5"
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
