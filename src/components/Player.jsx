import { useState, useRef } from "react";

export default function Player() {
  const inputRef = useRef();

  const [playerName, setPlayerName] = useState(null);

  function handleClick() {
    setPlayerName(inputRef.current.value);
  }

  return (
    <section id="player">
      {/* 
        Ternaray operator has even shorter syntax. 
        *** playerName ? playerName : "unknown entity" *** 
        This code can be writter as
        *** playerName ?? "unknown entity" *** 
      */}
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input ref={inputRef} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
