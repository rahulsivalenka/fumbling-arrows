import React, { useEffect, useState } from 'react';
import GoalPost from '../GoalPost/GoalPost';
import Instructor from '../Instructor/Instructor';
import Player from '../Player/Player';
import Settings from '../Settings/Settings';
import Timer from '../Timer/Timer';
import './TumblingArrowsGame.css';

function TumblingArrayGame() {
  const [gameState, setGameState] = useState({

  });
  const [playerPosition, setPlayerPosition] = useState({
    left: 0,
    top: 0
  });
  const gameWrapperElRef = React.createRef();

  useEffect(() => {
    console.log('Game mounted');

    const { clientHeight, clientWidth } = gameWrapperElRef.current;

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
      <Timer />
      <Instructor />
      <Player {...playerPosition} onPositionChange={updatePlayerPosition}/>
      <GoalPost />
    </div>
  )

  function updatePlayerPosition(top, left) {
    setPlayerPosition({
      top,
      left
    })
  }

  function cleanup() {
    console.log('Game unmounted');
  }
}

export default TumblingArrayGame;