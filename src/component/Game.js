import React from "react";
import anime from "../images/anime.jpg";
import "../styles/Game.css";
import Menu from "./Menu";

function Game() {
  return (
    <div className="game">
      <img src={anime} alt="anime tag" id="main-picture" />
    </div>
  );
}

export default Game;
