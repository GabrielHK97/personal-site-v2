import "./moving-tiles.style.css";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import anime from "animejs";

type MovingTilesProps = {
  height: number;
  width: number;
};

let defaultProps: MovingTilesProps = { height: 50, width: 50 };
let colorIndex: number = 1;
let canClick: boolean = true;
const colors = ["rgba(30, 43, 48, 0.2)", "rgba(0,0,0,0)"];

export function MovingTiles(props: PropsWithChildren<MovingTilesProps>) {
  const ref = useRef<HTMLDivElement>(null);
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);

  function bigger() {
    return columns > rows ? columns : rows;
  }

  function handleOnClick(index: number) {
    if (canClick) {
      canClick = false;
      setTimeout(() => {
        canClick = true;
      }, 50 * bigger());
      colorIndex += 1;
      anime({
        targets: ".tile",
        backgroundColor: colors[colorIndex % colors.length],
        delay: anime.stagger(50, { grid: [columns, rows], from: index }),
      });
    }
  }

  function createTile(index: number): HTMLDivElement {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.onclick = () => {
      handleOnClick(index);
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

  return (
    <div id="tiles" className="tiles" ref={ref}>
      {props.children}
    </div>
  );
}

MovingTiles.defaultProps = defaultProps;
