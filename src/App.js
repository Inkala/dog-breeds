import React from "react";

import DogsList from "./components/DogsList/DogsList";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Dog Breeds Chart</h1>
      </div>
      <DogsList></DogsList>
    </div>
  );
}

export default App;
