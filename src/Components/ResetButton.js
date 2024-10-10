import React from "react";
import "./components.css"
export function ResetButton({ handleReset }) {
  return <button className=" mt-2 how-it-work learn-more  w-[128px] h-[28px] px-5 py-2.5 text-center mr-2 mb-2" onClick={() => handleReset()}>Reset</button>;
}

export default ResetButton;
