import "./pixel-list.style.css";

export function PixelList(props: any) {
  return (
    <div id="pixel-list" className="pixel-list">
      <div id="pixel" className="pixel"></div>
      <div id="list" className="list">
        <div id="list-view" className="list-view">
          {props.children}
        </div>
      </div>
    </div>
  );
}
