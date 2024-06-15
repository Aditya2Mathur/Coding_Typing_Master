import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { WordSection } from "../Components/WordSection";
import { ThemesSection } from "../Components/ThemesSection";
import { WordAmountContext } from "../Components/WordProvider";

const SettingsPage = () => {
  const { wordAmount, changeWordAmount } = useContext(WordAmountContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/home');
  };

  return (
    <div>
      <section>
        <Navbar/>
        <WordSection changeWordAmount={changeWordAmount} wordAmount={wordAmount} />
        <ThemesSection />
        <div className="flex justify-center mt-8">
          <button 
            onClick={handleSubmit} 
            className="px-5 py-2.5 text-xl text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Start Typing
          </button>
        </div>
      </section>
    </div>
  );
};

export default SettingsPage;
