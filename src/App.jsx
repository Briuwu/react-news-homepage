import { useState } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import New from "./components/New";
import Card from "./components/Card";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="grid container">
        <Intro />
        <New />
        <Card />
      </section>
    </div>
  );
}

export default App;
