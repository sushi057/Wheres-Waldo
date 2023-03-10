import React, { useState, useEffect } from "react";
import anime from "../images/anime.jpg";
import "../styles/Game.css";
import Square from "./Square";

function Game() {
  const [squarePosition, setSquarePosition] = useState({ x: 0, y: 0 });
  const [showSquare, setShowSquare] = useState(false);

  const handleMouseClick = (event) => {
    setSquarePosition({ x: event.pageX - 67, y: event.pageY - 30 });
    setShowSquare(true);
    console.log(squarePosition.x, squarePosition.y);
  };

  //Remove Popup on 'Esc' key press
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setShowSquare(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="game">
      <img
        src={anime}
        alt="anime tag"
        id="main-picture"
        onClick={handleMouseClick}
      />
      {showSquare && <Square x={squarePosition.x} y={squarePosition.y} />}
    </div>
  );
}

export default Game;
