import React from "react";

function Result({ score, totalQuestions }) {
  // Calculate the percentage
  const percentage = (score / totalQuestions) * 100;

  // Determine the message and color based on the percentage
  let message = "";
  let color = "";

  if (percentage >= 70) {
    message = "Congratulations, you passed the quiz!";
    color = "green";
  } else {
    message = "Sorry, you have failed the quiz.";
    color = "red";
  }

  return (
    <div className="container mainquizpage flex-column align-items-center">
      <h1 className="mb-5 fs-1">Quiz Completed</h1>
      <p className="fs-3">
        Your Result: {score}/{totalQuestions}
      </p>
      <p className="fs-2" style={{ color }}>
        "{message}"
      </p>
      <p className="fs-3">
        Percentage: {percentage.toFixed(2)}%
      </p>
      {/* You can add more information or styling here */}
    </div>
  );
}

export default Result;
