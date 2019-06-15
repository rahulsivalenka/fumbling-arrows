import React from 'react';
import ReactDOM from 'react-dom';
import Instructor from './Instructor';

describe('Instructor', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Instructor currentDirections={[37, 38, 39, 40]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
