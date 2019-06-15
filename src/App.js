import React, { useEffect, useState } from 'react';
import './App.css';
import TumblingArrayGame from './TumblingArrowsGame/TumblingArrowsGame';

function App() {
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  const [minWindowSizeError, setMinWindowSizeError] = useState(false);

  useEffect(() => {
    console.log('App mounted');

    wireResizeEvent();

    return cleanup;
  })

  return (
    <div className="App">
      {
        minWindowSizeError
          ? (
            <div className="App-info">
              {`Minimum window size for this game has to be 800px  x  600px`}
            </div>
          )
          : <TumblingArrayGame />
      }
      <span className="App-window-size-info">
        {`${windowSize.width}px  x  ${windowSize.height}px`}
      </span>
    </div>
  );

  function windowResizehandler() {
    console.log('windowResizehandler');
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth
    });

    setMinWindowSizeError(windowSize.height < 600 || windowSize.width < 800);
  };

  function wireResizeEvent() {
    console.log('wireResizeEvent');
    window.addEventListener('resize', windowResizehandler);
  }

  function unwireResizeEvent() {
    console.log('unwireResizeEvent');
    window.removeEventListener('resize', windowResizehandler);
  }

  function cleanup() {
    console.log('Game unmounted');
    unwireResizeEvent();
  }
}

export default App;