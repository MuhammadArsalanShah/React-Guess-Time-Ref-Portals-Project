import { useState, useRef } from "react";

export default function Player() {
  const inputRef = useRef();

  console.log("Ref:", inputRef);

  const [playerName, setPlayerName] = useState(null);

  function handleClick() {
    setPlayerName(inputRef.current.value);
    inputRef.current.value = "";
  }

  return (
    <section id="player">
      {/* 
        Ternaray operator has even shorter syntax. 
        *** playerName ? playerName : "unknown entity" *** 
        This code can be written as
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



















/***** Coding Exercise 21 *****/
/*
import React from 'react';

function App() {
    
    const inputFile = React.useRef();
    
    function handleClick () {
        inputFile.current.click();
    }
    
    return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input ref={inputFile} data-testid="file-picker" type="file" accept="image/*" />
        <button onClick={handleClick}>Pick Image</button>
      </p>
    </div>
    );
}

export default App;
*/
