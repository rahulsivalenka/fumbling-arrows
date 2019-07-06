import React from 'react';
import './Key.css';

function Key(props) {
  return (
    <div className="Key">
      <div className="Key-inner">
        <div className={`Key-arrow Key-${props.direction}`}>^</div>
      </div>
    </div>
  );
}

export default Key;