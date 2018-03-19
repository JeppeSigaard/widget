import React from "react";
import { shallow } from "enzyme";
import App from "../app";

describe("App component", () => {
  it("renders without errors", () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
