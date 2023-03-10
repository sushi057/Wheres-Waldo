import React from "react";
import "../styles/Header.css";
import Elric from "../images/edward.jpg";
import Ichigo from "../images/ichigo.jpg";
import Light from "../images/light.jpg";

function Header() {
  return (
    <>
      <div className="nav-bar">
        <h2>
          WHERE <br />
          <span className="title">ARE</span>THEY{" "}
        </h2>
        <div className="timer">00:00</div>
        <div className="characters">
          <div className="charac">
            <img src={Ichigo} alt="ichigo" />
            <p className="char-name">Ichigo</p>
          </div>
          <div className="charac">
            <img src={Elric} alt="elric" />
            <p className="char-name">Edward</p>
          </div>
          <div className="charac">
            <img src={Light} alt="light" />
            <p className="char-name">Light</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
