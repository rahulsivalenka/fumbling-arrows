import React from 'react';
import ReactDOM from 'react-dom';
import TumblingArrayGame from './TumblingArrowsGame';

describe('TumblingArrowsGame', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TumblingArrayGame />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
