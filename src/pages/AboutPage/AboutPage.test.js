import React from 'react';
import { shallow } from 'enzyme';
import AboutPage from './AboutPage';

describe('<AboutPage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<AboutPage />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
