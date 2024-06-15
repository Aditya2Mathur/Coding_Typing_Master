import React from "react";
export function WordButton({ changeWordAmount, amount , currentAmount}) {
  console.log(currentAmount)
  return (
    currentAmount == amount ?
    <button className="p-2 md:p-4 lg:p-3 xl:p-1 text-xs lg:text-2xl xl:text-2xl md:text-xl rounded-md w-full bg-skin-fill hover:opacity-70  duration-200 outline-dashed outline-2 outline-offset-2 text-skin-base" 
      onClick={() => {changeWordAmount(amount);}}>{amount} words
    </button>
    :

    <button className="p-2 md:p-4 lg:p-3 xl:p-1 text-xs lg:text-2xl xl:text-2xl md:text-xl rounded-md w-full bg-skin-fill hover:-translate-y-1 hover:scale-110 hover:opacity-70  ease-in-out duration-200" 
      onClick={() => {changeWordAmount(amount);}}>{amount} words
    </button>
    
  );
}
