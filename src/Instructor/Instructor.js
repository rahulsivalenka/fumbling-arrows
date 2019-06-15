import React from 'react';
import Key from '../Key/Key';
import './Instructor.css';

function Instructor({ currentDirections }) {
  const directions = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  return (
    <div className="Instructor">
      <div className="Instructor-row">
        <Key direction={directions[currentDirections[0]]} />
      </div>
      <div className="Instructor-row">
        <Key direction={directions[currentDirections[1]]} />
        <Key direction={directions[currentDirections[2]]} />
        <Key direction={directions[currentDirections[3]]} />
      </div>
    </div>
  )
}

export default Instructor;