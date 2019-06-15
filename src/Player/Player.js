import React, { useEffect, useState } from 'react';
import './Player.css';

function Player(props) {
  const playerEl = React.createRef();

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

  useEffect(() => {
    console.log('Player updated');

    const newTop = getNewPosition(props.top, arrowKeyCodes.down, arrowKeyCodes.up, props.containerHeight, playerEl.current.clientHeight / 2);
    const newLeft = getNewPosition(props.left, arrowKeyCodes.right, arrowKeyCodes.left, props.containerWidth, playerEl.current.clientWidth / 2);
    props.onPositionChange(newTop, newLeft);
  }, [keysPressed])

  return (
    <div
      className="Player"
      style={{
        top: props.top,
        left: props.left
      }}
      ref={playerEl}>

      {/* Player */}

      {/* <pre className="Temp-info">
        {JSON.stringify(props, null, 2)}
      </pre> */}

    </div>
  );

  function getNewPosition(currentPosition, addKey, subtractKey, maxValue, offset) {
    var newPosition = parseInt(currentPosition, 10)
      - (keysPressed[subtractKey] ? moveDistancePerInterval : 0)
      + (keysPressed[addKey] ? moveDistancePerInterval : 0);
    return newPosition - offset < 0 ? 0 + offset : newPosition > maxValue - offset ? maxValue - offset : newPosition;
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