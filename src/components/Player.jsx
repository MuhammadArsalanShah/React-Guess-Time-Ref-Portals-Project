import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState('');
  const [submit, setSubmit] = useState(false);

  console.log('plyer name: ',playerName);

  function handleChange(event) {
    setSubmit(false)
    setPlayerName(event.target.value);
  }

  function handleClick() {
    setSubmit(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submit ? playerName : 'unknown entity'}</h2>
      <p>
        <input type="text" value={playerName} onChange={handleChange} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
