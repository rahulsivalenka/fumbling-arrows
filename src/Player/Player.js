import React, { useEffect, useState } from 'react';
import { arrowKeyCodes } from '../common/constants';
import './Player.css';

function Player(props) {
  const playerEl = React.createRef();

  const moveDistancePerInterval = 10; // in px

  const [keysPressed, setKeysPressed] = useState({});

  useEffect(() => {
    console.log('Player mounted');

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

    wireEvents();
    return cleanup;
  }, []);

  useEffect(() => {
    console.log('Player updated');

    function getNewPosition(currentPosition, addKey, subtractKey, maxValue, offset) {
      var newPosition = parseInt(currentPosition, 10)
        - (keysPressed[subtractKey] ? moveDistancePerInterval : 0)
        + (keysPressed[addKey] ? moveDistancePerInterval : 0);
      return newPosition - offset < 0 ? 0 + offset : newPosition > maxValue - offset ? maxValue - offset : newPosition;
    }

    const topOffset = playerEl.current.clientHeight / 2;
    const newTop = getNewPosition(props.top, arrowKeyCodes.down, arrowKeyCodes.up, props.containerHeight, topOffset);
    const leftOffset = playerEl.current.clientWidth / 2;
    const newLeft = getNewPosition(props.left, arrowKeyCodes.right, arrowKeyCodes.left, props.containerWidth, leftOffset);

    props.onPositionChange && props.onPositionChange(newTop, newLeft);
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
}

export default Player;