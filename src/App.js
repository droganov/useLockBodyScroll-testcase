import React from "react";
import "./App.css";

import Section from "./Section";
import Lock from "./Lock";

function App() {
  return (
    <div className="App">
      <Section>1</Section>
      <Section>2</Section>
      <Section>3</Section>
      <Section>4</Section>
      <Section>5</Section>
      <Section>6</Section>
      <Lock />
    </div>
  );
}

export default App;
