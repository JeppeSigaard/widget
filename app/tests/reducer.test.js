import reducer from "../reducer";
import { SET_WEATHER } from "../actions";

const mockActionLoading = {
  type: SET_WEATHER,
  status: "loading",
  data: { sum: "otherdata" }
};

const mockActionFailed = {
  type: SET_WEATHER,
  status: "failed",
  data: { sum: "data" }
};

const mockAction = {
  type: SET_WEATHER,
  status: "success",
  data: { sum: "data" }
};

describe("Reducer", () => {
  it("has initial state", () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it("does not update state on loading", () => {
    expect(reducer({ sum: "data" }, mockActionLoading)).toMatchSnapshot();
  });

  it("sets status code on error", () => {
    expect(reducer({}, mockActionFailed)).toMatchSnapshot();
  });

  it("stores weather data", () => {
    expect(reducer({}, mockAction)).toMatchSnapshot();
  });
});
