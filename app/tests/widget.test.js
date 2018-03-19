import React from "react";
import { render } from "enzyme";
import Widget from "../widget";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../reducer";

const initialState = {
  cod: 200,
  name: "Copenhagen",
  main: {
    temp: "45",
    humidity: "90"
  },
  wind: {
    deg: "10",
    speed: "1"
  }
};

const mockStore = createStore(rootReducer, initialState);

describe("Widget component", () => {
  it("renders without errors", () => {
    const component = render(
      <Provider store={mockStore}>
        <Widget />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
