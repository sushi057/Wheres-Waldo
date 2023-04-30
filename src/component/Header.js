import React from "react";
import "../styles/Header.css";
import Elric from "../images/edward.jpg";
import Ichigo from "../images/ichigo.jpg";
import Light from "../images/light.jpg";
import { formatTime } from "../utils/FormatTime";

function Header({ foundCharacters, startGame, time }) {
  return (
    <>
      <div className="nav-bar">
        <h2>
          HIDE <br />
          <span className="title">AND</span>SEEK{" "}
        </h2>
        <div className="timer">Time: {formatTime(time)}</div>
        <div className="characters">
          <div
            className={`charac ${
              foundCharacters.includes("Ichigo") ? "found" : ""
            }`}
          >
            <img src={Ichigo} alt="ichigo" />
            <p className="char-name">Ichigo</p>
          </div>
          <div
            className={`charac ${
              foundCharacters.includes("Edward") ? "found" : ""
            }`}
          >
            <img src={Elric} alt="elric" />
            <p className="char-name">Edward</p>
          </div>
          <div
            className={`charac ${
              foundCharacters.includes("Light") ? "found" : ""
            }`}
          >
            <img src={Light} alt="light" />
            <p className="char-name">Light</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
