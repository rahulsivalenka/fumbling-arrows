import React, { useEffect, useState } from 'react';
import './Player.css';

function Player(props) {
  const arrowKeyCodes = {
    left: 37,
    up: 38,
    right: 39,
    down: 40
  };
  const moveDistancePerInterval = 3; // in px

  const [keysPressed, setKeysPressed] = useState({});

  useEffect(() => {
    console.log('Player mounted');

    wireEvents();
    return cleanup;
  }, []);

  return (
    <div
      className="Player"
      style={{
        top: props.top,
        left: props.left
      }}>

      Player

      <pre className="Temp-info">
        {JSON.stringify(props, null, 2)}
      </pre>

    </div>
  );

  function getNewPosition(currentPosition, addKey, subtractKey) {

  }

  function keydownHandler({ which }) {
    console.log('keydown');
    if (Object.values(arrowKeyCodes).includes(which)) {
      keysPressed[which] = true;
      setKeysPressed({
        ...keysPressed
      });
    }
  }

  function keyupHandler({ which }) {
    console.log('keyup');
    if (Object.values(arrowKeyCodes).includes(which)) {
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