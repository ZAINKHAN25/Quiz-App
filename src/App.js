import { useState } from 'react';
import './App.css';
import megaquestions from './megadata.js';
import Mainquiz from './mainquiz.js';

function App() {
  let [ishomepagetrue, setishomepagetrue] = useState(true);
  let [issecondpagetrue, setissecondpagetrue] = useState(false);
  let [mainquiztrue, setmainquiztrue] = useState(false);

  let [questionnumber, setquestionnumber] = useState(0);
  let [selectedquestions, setselectedquestions] = useState(megaquestions[questionnumber]);

  const handleButtonClick = () => {
    setishomepagetrue(false);
    setissecondpagetrue(true);
  };

  const handleStartTestClick = () => {
    setissecondpagetrue(false);
    setmainquiztrue(true);
  };

  return (
    <div className="body">
      {ishomepagetrue ? (
        <Home
          ishomepagetruearea={setishomepagetrue}
          issecondpagetruearea={setissecondpagetrue}
          questionnumberarea={setselectedquestions}
          megaquestionsarea={megaquestions}
          handleButtonClick={handleButtonClick}
        />
      ) : issecondpagetrue ? (
        <SecondPage
          selectedquestionsarea={selectedquestions}
          handleStartTestClick={handleStartTestClick}
        />
      ) : mainquiztrue ? (
        <Mainquiz selectedquestionsarea={selectedquestions} />
      ) : null}

      <Fixed />
    </div>
  );
}

function Home({ megaquestionsarea, questionnumberarea, handleButtonClick }) {
  return (
    <div className='homepage d-flex flex-column'>
      <h1 className='mb-5 fs-1'>WELCOME TO THE QUIZ APP</h1>
      {megaquestionsarea.map((x, i) => (
        <button
          className="btn mt-3 btnbackgroundGreen fs-5"
          style={{ width: "80vw", color: "white" }}
          onClick={() => {
            questionnumberarea(megaquestionsarea[i]);
            handleButtonClick();
          }}
          type="button"
          key={i}
        >
          {x.subjectname}
        </button>
      ))}
    </div>
  );
}

function Fixed() {
  return (
    <p className='fixedmylogo'>
      THIS PROJECT IS MADE BY ZAINKHAN25
    </p>
  );
}

function SecondPage({ selectedquestionsarea, handleStartTestClick }) {
  return (
    <div className='secondpage d-flex flex-column conatiner'>
      <h1 className='mb-5 headingofsecondpage fs-1'>{selectedquestionsarea.subjectname} QUIZ</h1>
      <div className='fs-4'>TOTAL QUESTION : {selectedquestionsarea.totalquestions}</div>
      <div className='fs-4'>Passing Percentage : {selectedquestionsarea.passingpercentage}</div>

      <button
        style={{ width: "40vw" }}
        className='btn mt-5 btnbackgroundGreen fs-5'
        onClick={handleStartTestClick} // Call the click handler to start the test
      >
        START TEST
      </button>
    </div>
  );
}

export default App;
