import React from "react";
import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

test("app not broken", () => {
  render(<NewBoxForm />);
});

test("it matches snapshot", () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});
