import React from 'react';
import { shallow } from 'enzyme';
import SideBar from './SideBar';

describe('<SideBar />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SideBar />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
