import React from "react";
import Timer from "../Components/Timer";
import TypingText from "../Components/TypingText";
import Input from "../Components/Input";
import "../Components/components.css"
export function TypingPage({
  startCounting,
  timeElapsed,
  setTimeElapsed,
  word,
  activeWordIndex,
  correctWordArray,
  userInput,
  processInput,
  handleTabbed,
  handleReset,
}) {
  return (
    <div>
    <div className="typing-area p-9 rounded-2xl backdrop-blur flex flex-col gap-6">
      <TypingText
        word={word}
        activeWordIndex={activeWordIndex}
        correctWordArray={correctWordArray}
      />
      <Input
        userInput={userInput}
        processInput={processInput}
        handleTabbed={handleTabbed}
      />
      <Timer
        startCounting={startCounting}
        correctWords={correctWordArray.filter(Boolean).length}
        timeElapsed={timeElapsed}
        setTimeElapsed={setTimeElapsed}
      />
    </div>
  </div>
  );
}
export default TypingPage;
