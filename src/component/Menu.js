import React, { useState } from "react";
import "../styles/Menu.css";
import Elric from "../images/edward.jpg";
import Ichigo from "../images/ichigo.jpg";
import Light from "../images/light.jpg";

function Menu({ startTimer }) {
  const [showMenu, setShowMenu] = useState(true);

  const handleChange = () => {
    setShowMenu(!showMenu);
    startTimer();
  };
  return (
    <>
      {showMenu && (
        <div className="menu-background">
          <div className="menu">
            <h2>WELCOME</h2>
            <p>FIND THESE CHARACTERS FROM THE WEEKLY SHONEN JUMP </p>
            <div className="characters">
              <div className="char-menu">
                <img src={Ichigo} alt="ichigo" />
                <p className="char-name">Ichigo</p>
              </div>
              <div className="char-menu">
                <img src={Elric} alt="elric" />
                <p className="char-name">Edward</p>
              </div>
              <div className="char-menu">
                <img src={Light} alt="light" />
                <p className="char-name">Light</p>
              </div>
            </div>
            <button type="button" onClick={handleChange}>
              Start
            </button>
            <p>Try to find all the characters as soon as possible.</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
