import React from 'react';
import { shallow } from 'enzyme';
import PortfolioPage from './PortfolioPage';

describe('<PortfolioPage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<PortfolioPage />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
