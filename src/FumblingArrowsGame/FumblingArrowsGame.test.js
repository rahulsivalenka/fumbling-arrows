import React from 'react';
import ReactDOM from 'react-dom';
import FumblingArrayGame from './FumblingArrowsGame';

describe('FumblingArrowsGame', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FumblingArrayGame />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
