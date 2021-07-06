import React from "react";

import { CountStore } from "../../stores/CountStore";

import { CountsList } from "./CountsList";

export default {
  component: CountsList,
  title: "CountsList"
};

export const Empty: React.FC = () => {
  const store = React.useRef(new CountStore()).current;
  return <CountsList store={store} />;
};

export const WithCounts: React.FC = () => {
  const store = React.useMemo(() => {
    const newStore = new CountStore();
    newStore.counts = [1, 2, 3, 4];
    return newStore;
  }, []);

  return <CountsList store={store} />;
};
