import React from 'react';
import './Key.css';

function Key(props) {
  return (
    <div className="Key">
      {/* <div className="Key-base">
        <div className="Key-top">^</div>
      </div> */}
      {/* ^ */}
      <span className={`Key-arrow Key-${props.direction}`}></span>
    </div>
  );
}

export default Key;