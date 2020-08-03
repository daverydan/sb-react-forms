import React from "react";
import { render } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("renders w/out crashing", () => {
  render(<NewTodoForm />);
});

test("it matches snapshot", () => {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});
