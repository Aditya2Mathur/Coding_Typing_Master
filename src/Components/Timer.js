import React, { useEffect } from "react";
import "./components.css";

function Timer(props) {
  const { correctWords, startCounting, timeElapsed, setTimeElapsed } = props;

  useEffect(() => {
    let id;
    if (startCounting) {
      setTimeElapsed(0);
      id = setInterval(() => {
        setTimeElapsed((oldTime) => oldTime + 1);
      }, 100);
    } else {
      setTimeElapsed(0);
    }
    return () => {
      clearInterval(id);
    };
  }, [startCounting]);

  const minutes = timeElapsed / 10 / 60;
  return (
    <div className="flex gap-5">
      <div className="timer-box">
        <p className="timer-display">{(timeElapsed / 10).toFixed(1)} S</p>
        <p className="timer-text">Timer</p>
      </div>
      <div>
      <div className="timer-box">
        <p className="timer-display">{Math.round(correctWords / (timeElapsed / 10 / 60) || 0)} W/M</p>
        <p className="timer-text">Speed</p>
      </div>
        <p></p>
      </div>
    </div>
  );
}

export default Timer;
