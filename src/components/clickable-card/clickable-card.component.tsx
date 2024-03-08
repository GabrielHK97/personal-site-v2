import "./clickable-card.style.css";

export function ClickableCard(props: any) {
  return (
    <div className="clickable-card">
      <div className="clickable-wrapper">{props.children}</div>
    </div>
  );
}
