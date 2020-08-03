import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders w/out crashing", () => {
  render(<TodoList />);
});

test("it matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

test("should add new item", () => {
  const { queryByText, queryByLabelText, getByTestId } = render(<TodoList />);
  const input = queryByLabelText("Add Task");
  const button = queryByText("Add");
  const todoList = getByTestId("todo-list");
  expect(queryByText("wake up")).not.toBeInTheDocument();
  fireEvent.change(input, { target: { value: "wake up" } });
  fireEvent.click(button);
  expect(queryByText("wake up")).toBeInTheDocument();
  expect(todoList.children.length).toBe(4);
});

test("should delete an item", () => {
  const { getByTestId, queryByText } = render(<TodoList />);
  const button = getByTestId("todo-btn-2");
  fireEvent.click(button);
  expect(queryByText("take nap")).not.toBeInTheDocument();
});
