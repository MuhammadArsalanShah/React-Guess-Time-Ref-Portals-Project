import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

// let timerId;

export default function TimerChallenge({ title, targetTime }) {
  const timerId = useRef();
  const dialogRef = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timerId.current = setTimeout(() => {
      setTimerExpired(true);
      dialogRef.current.showModal();
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timerId.current);
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
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
