import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import Home from "../pages/index.js";

describe("With Enzyme", () => {
  it('App shows "Hello world"', () => {
    const app = shallow(<Home />);

    expect(app.find("div").text()).toEqual("Hello world");
  });
});

describe("With Snapshot Testing", () => {
  it('App shows "Hello world"', () => {
    const component = renderer.create(<Home />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
