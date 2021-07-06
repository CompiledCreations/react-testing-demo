import React from "react";

import { Counter } from "./Counter";

export default {
  component: Counter,
  title: "Counter"
};

export const Render: React.FC = () => {
  return <Counter />;
};
