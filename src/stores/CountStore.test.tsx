import { reaction } from "mobx";
import React from "react";

import { CountStore } from "./CountStore";

test("must be no counts", () => {
  const store = new CountStore();

  expect(store.counts).toHaveLength(0);
});

test("must add count", () => {
  const store = new CountStore();
  const onCountAdded = jest.fn();
  reaction(() => store.counts, onCountAdded);

  store.addCount(1);

  // Must add count
  expect(store.counts).toMatchObject([1]);

  // Must be observable
  expect(onCountAdded).toHaveBeenCalledTimes(1);
  expect(onCountAdded).toHaveBeenLastCalledWith([1], [], expect.anything());
});
