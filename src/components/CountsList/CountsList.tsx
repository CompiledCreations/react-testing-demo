import { observer } from "mobx-react-lite";
import React, { useCallback } from "react";
import Button from "react-bootstrap/Button";

import { CountStore } from "../../stores/CountStore";

export interface CountsListProps {
  store: CountStore;
}

export const CountsList = observer<CountsListProps>(({ store }) => {
  const handleClearClicked = useCallback(() => {
    store.clearCounts();
  }, [store]);

  return (
    <div className="border d-flex flex-column flex-grow-1 p-3">
      <div>Counts</div>
      <div className="border d-flex flex-grow-1 mt-2 p-2" data-testid="list-of-counts">
        {store.counts.length ? (
          <div className="d-flex flex-column flex-grow-1 align-items-end">
            {store.counts.map((count, idx) => (
              <span key={idx} data-testid="count-item">
                {count}
              </span>
            ))}
          </div>
        ) : (
          <div className="d-flex flex-grow-1 align-items-center justify-content-center">
            <span className="text-muted">No counts recorded</span>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-end mt-3">
        <Button disabled={!store.counts.length} onClick={handleClearClicked}>
          Clear
        </Button>
      </div>
    </div>
  );
});
