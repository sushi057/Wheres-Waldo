import React, { useState } from "react";
import "../styles/Menu.css";
import Elric from "../images/edward.jpg";
import Ichigo from "../images/ichigo.jpg";
import Light from "../images/light.jpg";

function Menu() {
  const [showMenu, setShowMenu] = useState(true);

  function handleChange() {
    setShowMenu(!showMenu);
  }
  return (
    <>
      {showMenu && (
        <div className="menu">
          <h2>Welcome</h2>
          <p>
            You need to find the folowign characters from the image provided.
          </p>
          <div className="characters">
            <div className="char-one">
              <img src={Ichigo} alt="ichigo" />
              <p className="char-name">Ichigo</p>
            </div>
            <div className="char-two">
              <img src={Elric} alt="elric" />
              <p className="char-name">Edward</p>
            </div>
            <div className="char-one">
              <img src={Light} alt="light" />
              <p className="char-name">Light</p>
            </div>
          </div>
          <button type="button" onClick={handleChange}>
            Start
          </button>
          <p>Try to find all the characters as soon as possible.</p>
        </div>
      )}
    </>
  );
}

export default Menu;
