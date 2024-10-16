import React from "react";
import Result from "../Components/Result";
export function ResultPage({
  getWords,
  timeElapsed,
  testFinished,
  setTestFinished,
  handleReset,
  correctWordArray,
}) {
  return (
    <div className="">
      <Result
        correctWordAmount={correctWordArray.filter(Boolean).length}
        correctWordArray={correctWordArray}
        totalWords={getWords}
        timeElapsed={timeElapsed}
        testFinished={testFinished}
        setTestFinished={setTestFinished}
        handleReset={handleReset} // Pass handleReset here
      />
     
    </div>
  );
}

export default ResultPage;
