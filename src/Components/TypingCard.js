import React, { useState, useContext } from "react";
import "../App.css";
import TypingPage from "../Screens/TypingPage";
import ResultPage from "../Screens/ResultPage";
import commonWords from "../Data/word.json";
import { WordAmountContext } from "./WordProvider";

function TypingCard() {
  const { wordAmount, selectedLanguages } = useContext(WordAmountContext);
  const [word, setWord] = useState(renderWords());
  const [userInput, setUserInput] = useState("");
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [correctWordArray, setCorrectWordArray] = useState([]);
  const [startCounting, setStartCounting] = useState(false);
  const [testFinished, setTestFinished] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  function handleReset() {
    setActiveWordIndex(0);
    setCorrectWordArray([]);
    setStartCounting(false);
    setUserInput("");
    setTestFinished(false);
    setWord(renderWords());
  }

  function renderWords() {
    const allWords = selectedLanguages.length
      ? selectedLanguages.flatMap((lang) => commonWords[lang])
      : Object.values(commonWords).flat();

    const randomWords = Array.from({ length: wordAmount }, () =>
      allWords[Math.floor(Math.random() * allWords.length)]
    );

    return randomWords;
  }

  function handleTabbed(KeyCode) {
    if (KeyCode.key === "Tab") {
      KeyCode.preventDefault();
      handleReset();
    }
  }

  function processInput(value) {
    if (!startCounting) {
        setStartCounting(true);
    }
    if (value.endsWith(" ")) {
        if (activeWordIndex === word.length - 1) {
            setUserInput("");
            setStartCounting(false);
            setTestFinished(true);
            return;
        }

        setActiveWordIndex((index) => index + 1);
        setUserInput("");

        setCorrectWordArray((data) => {
            const newword = value.trim();
            const newResult = [...data];
            // Update the correctness of the word
            newResult[activeWordIndex] = newword === word[activeWordIndex];
            return newResult;
        });
    } else {
        setUserInput(value);
    }
}

  return testFinished ? (
    <ResultPage
      getWords={word}
      timeElapsed={timeElapsed}
      testFinished={testFinished}
      setTestFinished={setTestFinished}
      handleReset={handleReset}
      correctWordArray={correctWordArray}
      // Add the correct WPM calculation
      wpm={calculateWPM(correctWordArray.length, timeElapsed)}
    />
  ) : (
    <TypingPage
      startCounting={startCounting}
      timeElapsed={timeElapsed}
      setTimeElapsed={setTimeElapsed}
      word={word}
      activeWordIndex={activeWordIndex}
      correctWordArray={correctWordArray}
      userInput={userInput}
      processInput={processInput}
      handleTabbed={handleTabbed}
      handleReset={handleReset}
    />
  );
}

// New function to calculate WPM
function calculateWPM(wordsTyped, timeElapsed) {
  const timeInMinutes = timeElapsed / 60; // Convert timeElapsed from seconds to minutes
  return timeInMinutes > 0 ? Math.round(wordsTyped / timeInMinutes) : 0; // Calculate WPM
}

export default TypingCard;
