import React from 'react';
import { shallow } from 'enzyme';
import ServicesCard from './ServicesCard';

describe('<ServicesCard />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ServicesCard />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
