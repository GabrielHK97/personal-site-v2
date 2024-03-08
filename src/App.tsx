import "./App.css";
import { HomePage } from "./pages/home/home.page";

function App() {

  let toggled: boolean = false;
  function showOrHide() {
    toggled ? HomePage.undo() : HomePage.do();
    toggled = !toggled;
  }

  return (
    <div className="background">
      <button className="menu-button" onClick={showOrHide}>Menu</button>
      <iframe id="home-iframe" className="home-iframe" src="/pages/home"/>
    </div>
  );
}

export default App;
