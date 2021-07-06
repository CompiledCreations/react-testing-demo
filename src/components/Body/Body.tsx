import React, { FC } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { CountStore } from "../../stores/CountStore";

import { Counter } from "../Counter";
import { CountsList } from "../CountsList";

export interface BodyProps {
  store: CountStore;
}

export const Body: FC<BodyProps> = ({ store }) => {
  return (
    <div className="flex-grow-1">
      <Container className="my-3">
        <Row>
          <Col>
            <Counter onReset={(count) => store.addCount(count)} />
          </Col>
          <Col className="d-flex">
            <CountsList store={store} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
