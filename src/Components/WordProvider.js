import React, { createContext, useState } from "react";
export const WordAmountContext = createContext();

function WordProvider({ children }) {
  const [wordAmount, setWordAmount] = useState(25);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const changeWordAmount = (newWordAmount) => {
    setWordAmount(newWordAmount);
  };

  const toggleLanguage = (language) => {
    setSelectedLanguages((prev) =>
      prev.includes(language)
        ? prev.filter((lang) => lang !== language)
        : [...prev, language]
    );
  };

  return (
    <WordAmountContext.Provider
      value={{ wordAmount, changeWordAmount, selectedLanguages, toggleLanguage }}
    >
      <div>{children}</div>
    </WordAmountContext.Provider>
  );
}

export default WordProvider;
