import React from "react";
import { shallow } from "enzyme";
import HomeLayout from "./HomeLayout";

describe("<HomeLayout />", () => {
  let component;

  beforeEach(() => {
    component = shallow(<HomeLayout />);
  });

  test("It should mount", () => {
    expect(component.length).toBe(1);
  });
});
