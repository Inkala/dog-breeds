import React from "react";

import DogsList from './components/DogsList/DogsList';
import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1>Dog Breeds Chart</h1>
      <DogsList></DogsList>
    </div>
  );
}

export default App;
