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
  height: 50,
  width: 50,
  duration: 500,
  interval: 1500,
};

export function MovingTiles(props: MovingTilesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);

  let colorIndex: number = 0;
  const colors = ["rgb(30, 43, 48)", "rgb(17, 25, 28)"];

  function startAnimation(index: number): void {
    const tile = document.getElementById(index.toString());
    if (tile) {
      tile.style.animation = `color-trail ${props.duration}ms linear`;
    }
    setTimeout(() => {
      if (tile) tile.style.animation = "";
    }, props.duration);
  }

  function moveGrid(index: number): void {
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
      startAnimation(index);
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
    setColumns(
      Math.floor(ref.current ? ref.current.clientWidth / props.width : 0)
    );
    setRows(
      Math.floor(ref.current ? ref.current.clientHeight / props.height : 0)
    );
    const tiles = document.getElementById("tiles");
    if (tiles) {
      tiles.innerHTML = "";
      tiles.style.setProperty("--columns", columns.toString());
      tiles.style.setProperty("--rows", rows.toString());
    }
    createTiles(columns * rows);
  }

  useEffect(() => {
    createGrid();
  }, [ref, props]);

  useEffect(() => {
    createGrid();
  });

  window.onresize = () => {
    createGrid();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * columns * rows);
      moveGrid(index);
    }, props.interval);
    return () => clearInterval(interval);
  }, [columns, rows]);

  useEffect(() => {
    const index = Math.floor(Math.random() * columns * rows);
    moveGrid(index);
  });

  return <div id="tiles" className="tiles" ref={ref}></div>;
}

MovingTiles.defaultProps = defaultProps;
