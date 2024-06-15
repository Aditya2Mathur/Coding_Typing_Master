import React from "react";
import Word from "./Word";
export function TypingText({ word, activeWordIndex, correctWordArray }) {
  return (
    <p className=" text-stone-300 text-xs lg:text-2xl xl:text-2xl md:text-xl">
      {/* {word.current.map((word, index) => { */}
      {word.map((word, index) => {
        return (
          <Word
            text={word}
            active={index === activeWordIndex}
            correct={correctWordArray[index]}
            key = {index}
          />
        );
      })}
    </p>
  );
}

export default TypingText;
