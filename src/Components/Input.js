import React from "react";
import "./components.css"
export function Input({ userInput, processInput, handleTabbed }) {
  return (
    <input
      className=" opacity-100 input-text-box rounded-md p-2 my-3 w-full"
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      placeholder="Typing text"
      autoFocus
      clearable
      value={userInput}
      onChange={(e) => processInput(e.target.value)}
      onKeyDown={(e) => handleTabbed(e)}
    />
  );
}

export default Input;
