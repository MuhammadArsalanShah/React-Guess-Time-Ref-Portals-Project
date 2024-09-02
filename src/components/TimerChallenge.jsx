import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

// let timerId;

export default function TimerChallenge({ title, targetTime }) {
  const timerId = useRef();
  const dialogRef = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000) //convert in milliseconds

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timerId.current);
    setTimeRemaining(targetTime * 1000);
    dialogRef.current.open();
  }

  function handleStart() {
    timerId.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timerId.current);
    dialogRef.current.open();
  }

  return (
    <>
      <ResultModal ref={dialogRef} result="lost" targetTime={targetTime} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
