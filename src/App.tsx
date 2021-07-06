import React, { useRef } from "react";

import { Body } from "./components/Body";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CountStore } from "./stores/CountStore";

import "./App.css";

function App() {
  const store = useRef(new CountStore()).current;

  return (
    <div className="d-flex flex-column flex-grow-1">
      <Header />
      <Body store={store} />
      <Footer />
    </div>
  );
}

export default App;
