import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

it("renders w/out crashing", () => {
  render(<Todo />);
});

test("it matches snapshot", () => {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});
