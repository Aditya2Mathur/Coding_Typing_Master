import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeButton = ({ label, themeClassName }) => {
  const { theme, changeTheme } = useContext(ThemeContext);

  function handleClick() {
    changeTheme(themeClassName);
    console.log("Theme Class Name:" + themeClassName);
  }

  return (
    themeClassName === theme ?

    <div >   
      <button className="p-2 md:p-4 lg:p-5 xl:p-1 text-xs bg-[#1D4ED8] lg:text-2xl xl:text-2xl md:text-xl rounded-md w-full bg-skin-fill hover:-translate-y-1 hover:scale-110 ease-in-out duration-200"  onClick={handleClick}>
        {label}
      </button>
    </div>
    :
    
    <div>   
      <button className="p-2 md:p-4 lg:p-3 xl:p-1 text-xs lg:text-2xl xl:text-2xl md:text-xl rounded-md w-full bg-skin-fill hover:-translate-y-1 hover:scale-110   ease-in-out duration-200" onClick={handleClick}>
        {label}
      </button>
    </div>
    
  );
};

export default ThemeButton;
