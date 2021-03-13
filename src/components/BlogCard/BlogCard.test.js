import React from "react";
import { shallow } from "enzyme";
import BlogCard from "./BlogCard";

describe("<BlogCard />", () => {
  let component;

  beforeEach(() => {
    component = shallow(<BlogCard />);
  });

  test("It should mount", () => {
    expect(component.length).toBe(1);
  });
});
