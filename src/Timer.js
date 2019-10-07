
import React, { useState, useEffect } from 'react';

const Timer = () => {

  const [time, setSeconds] = useState(900);
  const seconds = (time % 60);
  const minutes = Math.floor(time/60);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(900);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(time => time - 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  if (seconds < 10){
  return (
    <div className="app">
    <div className="timer">{minutes}:0{seconds}</div>
      <div className="rowofButtons">
        <button className="scoreButtons" onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="scoreButtons" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
  } else {
    return (
        <div className="app">
        <div className="timer">{minutes}:{seconds}</div>
          <div className="rowofButtons">
            <button className="scoreButtons" onClick={toggle}>
              {isActive ? 'Pause' : 'Start'}
            </button>
            <button className="scoreButtons" onClick={reset}>
              Reset
            </button>
          </div>
        </div>
      );
  }
};

export default Timer;