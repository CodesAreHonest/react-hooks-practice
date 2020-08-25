import React from 'react';
import RestartButton from "./component/RestartButton";
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

          <RestartButton onClick={restartTimer} seconds={seconds}/>
      </div>
  )
};

export default App;

