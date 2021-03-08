import React from 'react';
import { shallow } from 'enzyme';
import ContactPage from './ContactPage';

describe('<ContactPage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ContactPage />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
