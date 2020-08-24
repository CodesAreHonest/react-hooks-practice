import React from 'react';
import {useTimer} from "./hooks/useTimer";

const App = () => {

  const alertComplete = () => alert('timer completed');
  const [seconds, restartTimer] = useTimer(
      3, alertComplete, 1000
  );

  return (
      <div>
        <div>Seconds remaining: {seconds}</div>

        <hr/>

        <button type="button"
                style={{padding: "8px"}}
                onClick={restartTimer}
        >
          Restart Timer
        </button>
      </div>
  )
};

export default App;

