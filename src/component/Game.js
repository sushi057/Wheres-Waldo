import React, { useState } from "react";
import anime from "../images/anime.jpg";
import "../styles/Game.css";
import Square from "./Square";

function Game() {
  const [squarePosition, setSquarePosition] = useState({ x: 0, y: 0 });

  const handleMouseClick = (event) => {
    setSquarePosition({ x: event.clientX, y: event.clientY });
    console.log(event.clientX);
  };

  return (
    <div className="game">
      <img
        src={anime}
        alt="anime tag"
        id="main-picture"
        onClick={handleMouseClick}
      />
      <Square x={squarePosition.x} y={squarePosition.y} />
    </div>
  );
}

export default Game;
