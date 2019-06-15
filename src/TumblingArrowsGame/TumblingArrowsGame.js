import React, { useEffect, useState } from 'react';
import GoalPost from '../GoalPost/GoalPost';
import Instructor from '../Instructor/Instructor';
import Player from '../Player/Player';
import Settings from '../Settings/Settings';
import Timer from '../Timer/Timer';
import './TumblingArrowsGame.css';

const minWindowSize = {
  height: 600,
  width: 800
};

function TumblingArrayGame() {
  const [gameState, setGameState] = useState({
    windowSizeError: false
  });

  return (
    <div className="Game">
      <Settings />
      <Timer />
      <Instructor />
      <Player />
      <GoalPost />
    </div>
  )

  
}

export default TumblingArrayGame;