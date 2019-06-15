import React from 'react';
import './Instructor.css';
import Key from '../Key/Key';

function Instructor(props) {
  const directions = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  return (
    <div className="Instructor">
      <div className="Instructor-row">
        <Key direction="up" />
      </div>
      <div className="Instructor-row">
        <Key direction="left" />
        <Key direction="down" />
        <Key direction="right" />
      </div>
    </div>
  )
}

export default Instructor;