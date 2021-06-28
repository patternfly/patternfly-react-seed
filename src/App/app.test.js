import React from 'react';
import { shallow } from 'enzyme';
import App from './';

describe('App tests', () => {
  test('should render default App component', () => {
    const view = shallow(<App />);
    expect(view).toMatchSnapshot();
  });
});
