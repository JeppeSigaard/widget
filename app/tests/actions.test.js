import * as actions from "../actions";

describe("Action creator", () => {
  it("has action constant", () => {
    expect(actions.SET_WEATHER).toMatchSnapshot();
  });

  it("creates an action to set weather", () => {
    expect(actions.setWeather("loading")).toMatchSnapshot();
    expect(actions.setWeather("failed")).toMatchSnapshot();
    expect(actions.setWeather("success", { sum: "data" })).toMatchSnapshot();
  });
});
