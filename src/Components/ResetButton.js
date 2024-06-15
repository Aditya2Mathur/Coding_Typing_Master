import React from "react";
export function ResetButton({ handleReset }) {
  return <button className=" mt-2 text-white text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  px-5 py-2.5 text-center mr-2 mb-2" onClick={() => handleReset()}>reset</button>;
}

export default ResetButton;
