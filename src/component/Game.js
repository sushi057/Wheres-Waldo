import React from "react";
import anime from "../images/anime.jpg";
import "../styles/Game.css";
import Square from "./Square";

function Game() {
  const handleChange = () => {
    console.log("click");
  };
  return (
    <div className="game">
      <img
        src={anime}
        alt="anime tag"
        id="main-picture"
        onClick={handleChange}
      />
    </div>
  );
}

export default Game;
