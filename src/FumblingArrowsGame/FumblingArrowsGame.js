import React, { useEffect, useState } from 'react';
import { arrowKeyCodes } from '../common/constants';
import GoalPost from '../GoalPost/GoalPost';
import Instructor from '../Instructor/Instructor';
import Player from '../Player/Player';
import Settings from '../Settings/Settings';
import Timer from '../Timer/Timer';
import './FumblingArrowsGame.css';

function FumblingArrayGame() {
  const [currentDirections, setCurrentDirections] = useState([arrowKeyCodes.up, arrowKeyCodes.left, arrowKeyCodes.down, arrowKeyCodes.right]);

  const [playerPosition, setPlayerPosition] = useState({
    left: 0,
    top: 0
  });

  const [gameDimensions, setGameDimensions] = useState({
    height: 0,
    width: 0
  });

  const [isGamePaused, setIsGamePaused] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const gameWrapperElRef = React.createRef();

  useEffect(() => {
    console.log('Game mounted');

    function cleanup() {
      console.log('Game unmounted');
    }

    const { clientHeight, clientWidth } = gameWrapperElRef.current;

    setGameDimensions({
      height: clientHeight,
      width: clientWidth
    });

    // Set initial position at the center of the game
    setPlayerPosition({
      left: clientWidth / 2,
      top: clientHeight / 2
    });

    return cleanup;
  }, []);

  return (
    <div
      className="Game"
      ref={gameWrapperElRef}>

      <Settings />

      <button style={{ zIndex: 9999999, position: 'absolute' }} onClick={() => setIsGameStarted(!isGameStarted)}>{isGameStarted ? 'Stop' : 'Start'}</button>

      <Timer {...{
        isGamePaused,
        isGameStarted
      }} />

      <Instructor currentDirections={currentDirections} />

      <Player
        {...playerPosition}
        {...{
          containerWidth: gameDimensions.width,
          containerHeight: gameDimensions.height
        }}
        onPositionChange={updatePlayerPosition} />

      <GoalPost />

    </div>
  )

  function updatePlayerPosition(top, left) {
    console.log('Update player position', top, left);
    setPlayerPosition({
      top,
      left
    })
  }
}

export default FumblingArrayGame;