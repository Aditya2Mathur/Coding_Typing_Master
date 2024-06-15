import React, { useContext } from "react";
import { WordAmountContext } from "./WordProvider";
import { WordButton } from "./WordButton";

const languages = ["Python", "JavaScript", "HTML", "CSS", "Java", "C++", "C_Language", "PHP", "C#"];

export function WordSection({ changeWordAmount, wordAmount }) {
  const { selectedLanguages, toggleLanguage } = useContext(WordAmountContext);
  const wordAmounts = [25, 50, 75, 100];

  return (
    <>
      <div className=" lg:mb-20 flex gap-4 sm:justify-evenly xl:justify-evenly lg:flex-row flex-col sm:max-:flex-col">
        <div className="">
        <h1 className="my-4 lg:my-8 lg:text-4xl sm:text-2xl">Word Amount</h1>
        <div className="grid grid-cols-2 gap-10">
          {wordAmounts.map((amount) => (
            <WordButton
              key={amount}
              changeWordAmount={changeWordAmount}
              amount={amount}
              currentAmount={wordAmount}
            />
          ))}
        </div>
        </div>
       <div>
       <h1 className="my-4 lg:my-8 text-2xl lg:text-4xl xl:text-4xl md:text-2xl">Select Programming Languages</h1>
        <div className="grid grid-cols-3">
          {languages.map((language) => (
            <div key={language}>
              <input 
                type="checkbox"
                id={language}
                name={language}
                checked={selectedLanguages.includes(language)}
                onChange={() => toggleLanguage(language)}
              />
              <label className="text-xs lg:text-2xl xl:text-2xl md:text-xl" htmlFor={language}>{language}</label>
            </div>
          ))}
        </div>
       </div>
      </div>
    </>
  );
}
