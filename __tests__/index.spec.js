import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import Index from "../pages/index.js";

const setup = overrideProps => {
  const props = {
    products: [
      {
        _id: "5a0b35c1734d1d08bf7084c3",
        name: "iPhone 8",
        cost: 800,
        category: "Phones",
        img: {
          url: "https://aerolab-challenge.now.sh/images/iPhone8-x1.png",
          hdUrl: "https://aerolab-challenge.now.sh/images/iPhone8-x2.png"
        }
      }
    ],
    ...overrideProps
  };

  const wrapper = shallow(<Index {...props} />);

  return {
    props,
    wrapper,
    instance: wrapper.instance()
  };
};

describe("With Enzyme and match snapshot", () => {
  it('App shows "Hello world"', () => {
    const { wrapper } = setup();

    expect(wrapper.find("title").text()).toEqual("Rewards Store");
  });
});

describe("With Snapshot Testing", () => {
  it("App shows title and renders children", () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
