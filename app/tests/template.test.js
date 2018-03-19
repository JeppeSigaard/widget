import template from "../template";

describe("Template file", () => {
  it("returns a template", () => {
    expect(template("mockhtml", { sum: "data" })).toMatchSnapshot();
  });
});
