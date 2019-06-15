import React from 'react';
import ReactDOM from 'react-dom';
import GoalPost from './GoalPost';

describe('GoalPost', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GoalPost />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
