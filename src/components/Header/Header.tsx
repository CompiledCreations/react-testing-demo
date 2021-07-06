import React, { FC } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export const Header: FC = () => {
  return (
    <header>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">React Testing Demo</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};
