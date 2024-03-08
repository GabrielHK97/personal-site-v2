import "./moving-tiles.style.css";
import { useEffect, useRef, useState } from "react";
import anime from "animejs";

type MovingTilesProps = {
  height: number;
  width: number;
  duration: number;
  interval: number;
};

let defaultProps: MovingTilesProps = {
  height: 30,
  width: 60,
  duration: 500,
  interval: 1500,
};

export function MovingTiles(props: MovingTilesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);

  let colorIndex: number = 0;
  const colors = ["rgb(30, 43, 48)", "rgb(26, 36, 40)"];

  function followMouse(index: number): void {
    const tile = document.getElementById(index.toString());
    if (tile) {
      tile.style.animation = `color-trail ${props.duration}ms linear`;
    }
    setTimeout(() => {
      if (tile) tile.style.animation = "";
    }, props.duration);
  }

  function oscilateGrid(index: number): void {
    colorIndex += 1;
    anime({
      targets: ".tile",
      backgroundColor: colors[colorIndex % colors.length],
      delay: anime.stagger(25, { grid: [columns, rows], from: index }),
    });
  }

  function createTile(index: number): HTMLDivElement {
    const tile = document.createElement("div");
    tile.id = index.toString();
    tile.classList.add("tile");
    tile.onmouseenter = () => {
      followMouse(index);
    };
    return tile;
  }

  function createTiles(quantity: number): void {
    const tiles = document.getElementById("tiles");
    Array.from(Array(quantity)).map((tile, index) => {
      if (tiles) tiles.appendChild(createTile(index));
    });
  }

  function createGrid(): void {
    setColumns(props.width);
    setRows(props.height);
    const tiles = document.getElementById("tiles");
    if (tiles) {
      tiles.innerHTML = "";
      tiles.style.setProperty("--columns", columns.toString());
      tiles.style.setProperty("--rows", rows.toString());
    }
    createTiles(columns * rows);
  }

  window.onresize = () => {
    createGrid();
  };

  useEffect(() => {
    oscilateGrid(Math.floor(Math.random() * columns * rows));
    createGrid();
    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * columns * rows);
      oscilateGrid(index);
    }, props.interval);
    return () => clearInterval(interval);
  });

  return <div id="tiles" className="tiles" ref={ref}></div>;
}

MovingTiles.defaultProps = defaultProps;
