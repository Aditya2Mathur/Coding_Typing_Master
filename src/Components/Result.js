import React, { useState } from "react";
import './components.css';
import ResetButton from "./ResetButton";

const Result = (props) => {
  const { correctWordAmount, correctWordArray, totalWords, timeElapsed, handleReset } = props; // Add handleReset here
  const [toggle, setToggle] = useState(false);
  const minutes = timeElapsed / 60 / 10;
  const wpm = Math.round(correctWordAmount / minutes || 0);
  const accuracy = correctWordArray.length > 0 
    ? Math.floor((correctWordArray.filter(Boolean).length / correctWordArray.length) * 100) 
    : 0;

  const getTitle = (wpm) => {
    if (wpm >= 60) {
      return "You're a Typing Wizard!";
    } else if (wpm >= 30) {
      return "You're an Octopus!";
    } else {
      return "You're Getting There!";
    }
  };

  const getFeedback = (accuracy) => {
    if (accuracy >= 90) {
      return "Amazing accuracy! Good job!";
    } else if (accuracy >= 75) {
      return "Well done! Keep practicing for perfection!";
    } else {
      return "Good effort! Keep improving!";
    }
  };

  function toggleWords() {
    setToggle(!toggle);
  }

  return (
    <div className="result-bg p-9 rounded-2xl backdrop-blur outline animation-container">
      <h2 className="text-3xl font-bold animation-part1">{getTitle(wpm)}</h2>
      <p className="text-lg animation-part2">Neat! You type with the speed of <span className="text-xl text-skin-base">{Math.round(totalWords.length / minutes || 0)} WPM</span>.</p>
      <p className="animation-part3">Your accuracy was <span className="text-xl text-skin-base">{accuracy}%</span>. {getFeedback(accuracy)}</p>

      <div className="mt-8 animation-part4">
        <p>Raw WPM: {Math.round(totalWords.length / minutes || 0)}</p>
        <p>Test type: {totalWords.length} Words</p>
      </div>
      {/* Button div */}
      <div className="flex justify-evenly pt-3 align-middle">
      <button
        onClick={toggleWords}
        className="mt-2 text-xl  font-medium rounded-lg m-2 px-5 py-2.5 text-center how-it-work"
      >
        Word History
      </button>
      <ResetButton handleReset={handleReset} />
      </div>
      
      {toggle ? (
        <p className="animation-part5">
          {totalWords.map((word, index) => {
            return correctWordArray[index] === false ? (
              <span className="underline bg-skin-fill rounded-sm mr-1">
                {word + " "}
              </span>
            ) : (
              <span>{word + " "}</span>
            );
          })}
        </p>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Result;
