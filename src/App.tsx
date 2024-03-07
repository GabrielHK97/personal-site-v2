import "./App.css";
import { MovingTiles } from "./components/moving-grid/moving-tiles.component";
import { TypedEffect } from "./components/typed-effect/typed-effect.component";

function App() {
  return (
    <div className="background">
      <div className="centered">
        <TypedEffect value="gabrielhk.dev"/>
      </div>
      <div className="wrapper">
        <MovingTiles />
      </div>
    </div>
  );
}

export default App;
