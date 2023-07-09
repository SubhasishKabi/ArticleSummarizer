import React from "react";
import "./App.css";

import Hero from "./components/hero";
import Demo from "./components/demo";

export default function App() {
  return (
    <main>
      <div className="main">
        <div className="gradient"></div>
      </div>
      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>
  );
}
