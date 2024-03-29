import React, { useState } from "react";
import "../styles/Square.css";

function Square(props) {
  const { x, y, handleClick, foundCharacters } = props;
  const [clickedButtons, setClickedButtons] = useState([]);

  const handleButtonClick = (event, character) => {
    handleClick(event, character);
    if (foundCharacters && foundCharacters.includes(character)) {
      setClickedButtons((prevClickedButtons) => [
        ...prevClickedButtons,
        character,
      ]);
    }
    console.log(clickedButtons);
  };

  return (
    <>
      <div
        className="square-box"
        style={{ position: "absolute", left: x, top: y }}
      >
        <div className="main-square"></div>
        <div className="char-list">
          <button
            type="button"
            className={`char-button ${
              clickedButtons.includes("Ichigo") ? "clicked" : ""
            }`}
            onClick={(event) => handleButtonClick(event, "Ichigo")}
          >
            Ichigo
          </button>
          <button
            type="button"
            className={`char-button ${
              clickedButtons.includes("Edward") ? "clicked" : ""
            }`}
            onClick={(event) => handleButtonClick(event, "Edward")}
          >
            Edward
          </button>
          <button
            type="button"
            className={`char-button ${
              clickedButtons.includes("Light") ? "clicked" : ""
            }`}
            onClick={(event) => handleButtonClick(event, "Light")}
          >
            Light
          </button>
        </div>
      </div>
    </>
  );
}

export default Square;
