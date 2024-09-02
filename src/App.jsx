import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title='Easy' targetTime={1} />
        <TimerChallenge title='Not easy' targetTime={5} />
        <TimerChallenge title='Getting tough' targetTime={10} />
        <TimerChallenge title='Pros only' targetTime={15} />
      </div>
    </>
  );
}

export default App;



/*** Coding exercise 22: Managing other values completed. code is on Udemy's exercise block ***/

/*** Coding exercise 23: Forwarding refs. code is on Udemy's exercise block ***/

/*** Coding exercise 24: Exposing component APIs. code is on Udemy's exercise block ***/

/*** Coding exercise 25: Working with portals. code is on Udemy's exercise block ***/

