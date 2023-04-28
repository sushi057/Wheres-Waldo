import React from "react";
import "../styles/Square.css";

function Square(props) {
  const { x, y, status = false } = props;
  return (
    <>
      <div
        className="square-box"
        style={{ position: "absolute", left: x, top: y }}
      >
        <div className="main-square"></div>
        <div className="char-list">
          <button type="button" className="char-button">
            Ichigo
          </button>
          <button type="button" className="char-button">
            Edward
          </button>
          <button type="button" className="char-button">
            Light
          </button>
        </div>
      </div>
    </>
  );
}

export default Square;
