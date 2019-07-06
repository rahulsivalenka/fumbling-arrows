import React, { useEffect, useReducer, useState } from 'react';
import './Timer.css';

function Timer(props) {
  const defaultStartTime = 30; // seconds
  const startTime = props.start || defaultStartTime // seconds;

  const [time, timeDispatch] = useReducer(timeReducer, startTime);
  const [timerId, setTimerId] = useState(null);

  // NOTE: Closure does not work inside useEffect
  // let timerId;
  useEffect(() => {
    const { isGamePaused, isGameStarted } = props;
    console.log('isGamePaused', isGamePaused);
    console.log('isGameStarted', isGameStarted);

    if (isGameStarted && !isGamePaused && !timerId) {
      console.log('Starting the timer');
      const timerId = setInterval(() => {
        console.log('time', time);
        // setTime(time - 1); // NOTE: This does not get the updated value of the 'time'
        timeDispatch({
          type: 'countdown'
        });
      }, 1000);
      setTimerId(timerId);
    } else if (!isGameStarted && timerId) {
      console.log('Stopping the timer');
      clearInterval(timerId);
      timeDispatch({
        type: 'reset',
        payload: startTime
      });
    }

  }, [props.isGamePaused, props.isGameStarted, timerId]);

  return (
    <div className="Timer">
      {toTimeString(time)}
    </div>
  )
}

function toTimeString(time) {
  return `${time}s`;
}

function timeReducer(state, action) {
  switch (action.type) {
    case 'countdown':
      return state -= 1;
    case 'reset':
      return action.payload;
    case 'pause':
    default:
    // throw new Error();
  }
}

export default Timer;