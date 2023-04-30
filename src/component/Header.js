import React, { useState } from "react";
import "../styles/Header.css";
import Elric from "../images/edward.jpg";
import Ichigo from "../images/ichigo.jpg";
import Light from "../images/light.jpg";

function Header() {
  const [foundCharacters, setFoundCharacters] = useState([]);

  const handleCharacterFound = (character) => {
    setFoundCharacters([...foundCharacters, character]);
  };

  return (
    <>
      <div className="nav-bar">
        <h2>
          HIDE <br />
          <span className="title">AND</span>SEEK{" "}
        </h2>
        <div className="timer">00:00</div>
        <div className="characters">
          <div className="charac">
            <img
              src={Ichigo}
              alt="ichigo"
              className={foundCharacters.includes("Ichigo") ? "found" : ""}
            />
            <p className="char-name">Ichigo</p>
          </div>
          <div className="charac">
            <img
              src={Elric}
              alt="elric"
              className={foundCharacters.includes("Edward") ? "found" : ""}
            />
            <p className="char-name">Edward</p>
          </div>
          <div className="charac">
            <img
              src={Light}
              alt="light"
              className={foundCharacters.includes("Light") ? "found" : ""}
            />
            <p className="char-name">Light</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
