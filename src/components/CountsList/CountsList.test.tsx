import { fireEvent, render } from "@testing-library/react";
import React from "react";

import { CountStore } from "../../stores/CountStore";

import { CountsList } from "./CountsList";

test("must display empty list", () => {
  const store = new CountStore();
  const { getByTestId } = render(<CountsList store={store} />);

  expect(getByTestId("list-of-counts")).toHaveTextContent("No counts recorded");
});

test("must list counts", () => {
  const store = new CountStore();
  store.counts = [1, 2, 3, 4];
  const { getAllByTestId } = render(<CountsList store={store} />);

  expect(getAllByTestId("count-item").map((item) => item.textContent)).toMatchObject([
    "1",
    "2",
    "3",
    "4"
  ]);
});

test("must disable clear button when counts empty", () => {
  const store = new CountStore();
  const { getByText } = render(<CountsList store={store} />);

  expect(getByText("Clear")).toBeDisabled();
});

test("must enable clear button when counts not empty", () => {
  const store = new CountStore();
  store.counts = [1];
  const { getByText } = render(<CountsList store={store} />);

  expect(getByText("Clear")).not.toBeDisabled();
});

test("must clear counts", () => {
  const store = new CountStore();
  store.counts = [1, 2, 3, 4];
  const { getByText } = render(<CountsList store={store} />);

  fireEvent.click(getByText("Clear"));

  expect(store.counts).toHaveLength(0);
  expect(getByText("Clear")).toBeDisabled();
});
