import "./home.style.css";
import { MovingTiles } from "../../components/moving-grid/moving-tiles.component";
import { TypedEffect } from "../../components/typed-effect/typed-effect.component";

export function Home() {
  return (
    <div className="home">
      <div className="centered">
        <TypedEffect value="gabrielhk.dev" />
      </div>
      <div className="wrapper">
        <MovingTiles />
      </div>
    </div>
  );
}
