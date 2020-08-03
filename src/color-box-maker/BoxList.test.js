import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

test("app not broken", () => {
  render(<BoxList />);
});

test("it matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

test("should add new item", () => {
  const { queryByText, queryByLabelText, getByTestId } = render(<BoxList />);
  const boxList = getByTestId("box-list");
  const bgColor = queryByLabelText("Background Color:");
  const height = queryByLabelText("Height:");
  const width = queryByLabelText("Width:");
  const button = queryByText("Add");
  fireEvent.change(bgColor, { target: { value: "#F50000" } });
  fireEvent.change(height, { target: { value: 50 } });
  fireEvent.change(width, { target: { value: 50 } });
  fireEvent.click(button);
  const box3 = document.getElementById("box-3");
  expect(box3).toBeInTheDocument();
  expect(box3.style.backgroundColor).toBe("rgb(245, 0, 0)");
  expect(box3.style.height).toBe("50px");
  expect(box3.style.width).toBe("50px");
  expect(boxList.children.length).toBe(4);
});

test("should delete an item", () => {
  const { getByTestId } = render(<BoxList />);
  const boxList = getByTestId("box-list");
  const boxBtn2 = getByTestId("box-btn-2");
  fireEvent.click(boxBtn2);
  const box2 = document.getElementById("box-2");
  expect(box2).not.toBeInTheDocument();
  expect(boxList.children.length).toBe(2);
});
