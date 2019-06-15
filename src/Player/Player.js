import React, { useEffect, useState } from 'react';
import './Player.css';

const arrowKeyCodes = [37, 38, 39, 40];

function Player(props) {
  const [keysPressed, setKeysPressed] = useState({});

  useEffect(() => {
    console.log('Player mounted');

    wireEvents();
    return cleanup;
  });

  return (
    <div className="Player" style={{
      top: props.top,
      left: props.left
    }}>
      Player

      <pre className="Temp-info">
        {JSON.stringify(keysPressed, null, 2)}
      </pre>
    </div>
  );

  // function getNewPosition(currentPosition, ) {

  // }

  function keydownHandler({ which }) {
    console.log('keydown');
    if (arrowKeyCodes.includes(which)) {
      keysPressed[which] = true;
      setKeysPressed({
        ...keysPressed
      });
    }
  }

  function keyupHandler({ which }) {
    console.log('keyup');
    if (arrowKeyCodes.includes(which)) {
      keysPressed[which] = false;
      setKeysPressed({
        ...keysPressed
      });
    }
  }

  function wireEvents() {
    window.addEventListener('keydown', keydownHandler);
    window.addEventListener('keyup', keyupHandler);
  }

  function unwireEvents() {
    window.removeEventListener('keydown', keydownHandler);
    window.removeEventListener('keyup', keyupHandler);
  }

  function cleanup() {
    console.log('Player unmounted');

    unwireEvents();
  }
}

export default Player;