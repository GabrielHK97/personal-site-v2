import { useState } from "react";
import "./App.css";
import { MovingTiles } from "./components/moving-grid/moving-tiles.component";

function App() {
  return (
    <div className="background">
      <MovingTiles></MovingTiles>
    </div>
  );
}

export default App;
