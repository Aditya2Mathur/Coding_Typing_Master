import React, { useState } from "react";

const Result = (props) => {
  const [toggle, setToggle] = useState(false);
  const { correctWordAmount, correctWordArray, totalWords, timeElapsed } =
    props;
  const minutes = timeElapsed / 60 / 10;

  function toggleWords() {
    setToggle(!toggle);
  }

  return (
    <div className=" bg-skin-bgcol p-9 rounded-2xl backdrop-blur  outline">
      <p>WPM</p>
      <p className=" text-6xl mb-6 text-skin-base">
        {Math.round(correctWordAmount / minutes || 0)}
      </p>
      <p>Acc:</p>
      <p className=" text-6xl mb-6 text-skin-base">
        {Math.floor(100 -
          (totalWords.length - correctWordAmount) / (totalWords.length / 100))}
        %
      </p>

      <div className="mt-8">
        <p>raw wpm: {(Math.round(totalWords.length / minutes || 0))}</p>
        <p>test type: {totalWords.length} Words</p>
      </div>
      <button
        onClick={toggleWords}
        className=" mt-2 text-white text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  m-2 px-5 py-2.5 text-center mr-2 mb-2  ease-in-out duration-200"
      >
        word history
      </button>
      {toggle ? (
        <p>
          {totalWords.map((word, index) => {
            // correctWordArray[index] == false
            return correctWordArray[index] === false ? (
              <span className="underline bg-skin-fill  rounded-sm mr-1 ">
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
