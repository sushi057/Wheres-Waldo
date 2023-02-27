import "./styles/App.css";
import Header from "./component/Header";
import Menu from "./component/Menu";
import { useState } from "react";
import Game from "./component/Game";

function App() {
  const [timer, setTimer] = useState(null);

  return (
    <div className="App">
      <Header />
      <Menu />
      <Game />
    </div>
  );
}

export default App;
