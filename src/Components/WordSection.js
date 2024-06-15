import React, { useContext } from "react";
import { WordAmountContext } from "./WordProvider";
import { WordButton } from "./WordButton";

const languages = ["Python", "JavaScript", "HTML", "CSS", "Java", "C++", "C_Language", "PHP", "C#"];

export function WordSection({ changeWordAmount, wordAmount }) {
  const { selectedLanguages, toggleLanguage } = useContext(WordAmountContext);
  const wordAmounts = [25, 50, 75, 100];

  return (
    <>
      <div className=" flex justify-evenly">
        <div className="">
        <h1 className="my-8 text-4xl">Word Amount</h1>
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
       <h1 className="my-8 text-4xl">Select Programming Languages</h1>
        <div>
          {languages.map((language) => (
            <div key={language}>
              <input
                type="checkbox"
                id={language}
                name={language}
                checked={selectedLanguages.includes(language)}
                onChange={() => toggleLanguage(language)}
              />
              <label htmlFor={language}>{language}</label>
            </div>
          ))}
        </div>
       </div>
      </div>
    </>
  );
}
