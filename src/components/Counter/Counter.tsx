import React, { FC, useCallback, useState } from "react";
import Button from "react-bootstrap/Button";

import styles from "./Counter.module.scss";

export interface CounterProps {
  onReset?: (count: number) => void;
}

export const Counter: FC<CounterProps> = ({ onReset }) => {
  const [count, setCount] = useState(0);

  const handleCountClicked = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleResetClicked = useCallback(() => {
    setCount(0);
    if (onReset) {
      onReset(count);
    }
  }, [count, onReset]);

  return (
    <div className="border p-3">
      <div className="d-flex justify-content-center">
        <span className={`font-weight-bold ${styles.count}`} data-testid="count-value">
          {count}
        </span>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <Button onClick={handleResetClicked} title="Reset the counter" variant="secondary">
          Reset
        </Button>
        <Button className="ml-1" onClick={handleCountClicked}>
          Count
        </Button>
      </div>
    </div>
  );
};
