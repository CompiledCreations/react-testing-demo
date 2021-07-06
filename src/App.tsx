import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import "./App.css";

function App() {
  return (
    <div className="d-flex flex-column flex-grow-1">
      <header>
        <Navbar bg="light">
          <Container>
            <Navbar.Brand href="#home">React Testing Demo</Navbar.Brand>
          </Container>
        </Navbar>
      </header>
      <div className="flex-grow-1">
        <Container>Main Stuff</Container>
      </div>
      <footer>
        <Container>Footer</Container>
      </footer>
    </div>
  );
}

export default App;
