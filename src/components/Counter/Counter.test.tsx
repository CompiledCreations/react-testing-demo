import { fireEvent, render } from "@testing-library/react";
import React from "react";

import { Counter } from "./Counter";

test("must render with initial count of zero", () => {
  const { getByTestId } = render(<Counter />);

  expect(getByTestId("count-value")).toHaveTextContent("0");
});

test("must count clicks", () => {
  const { getByTestId, getByText } = render(<Counter />);

  fireEvent.click(getByText("Count"));

  // Must count first click
  expect(getByTestId("count-value")).toHaveTextContent("1");

  fireEvent.click(getByText("Count"));

  // Must count second click
  expect(getByTestId("count-value")).toHaveTextContent("2");
});

test("must reset counter", () => {
  const { getByTestId, getByText } = render(<Counter />);

  fireEvent.click(getByText("Count"));
  fireEvent.click(getByText("Reset"));

  expect(getByTestId("count-value")).toHaveTextContent("0");
});

test("must call onReset", () => {
  const onReset = jest.fn();
  const { getByText } = render(<Counter onReset={onReset} />);

  fireEvent.click(getByText("Count"));
  fireEvent.click(getByText("Count"));
  fireEvent.click(getByText("Count"));
  fireEvent.click(getByText("Reset"));

  expect(onReset).toHaveBeenCalledTimes(1);
  expect(onReset).toHaveBeenLastCalledWith(3);
});
