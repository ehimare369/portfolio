import React from 'react';
import { shallow } from 'enzyme';
import BlogPage from './BlogPage';

describe('<BlogPage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<BlogPage />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
