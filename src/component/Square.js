import React from "react";
import "../styles/Square.css";

function Square() {
  return (
    <>
      <div className="square-box">
        {/* <div className="main-square"></div> */}
        <div className="char-list">
          <li>Ichigo</li>
          <li>Edward</li>
          <li>Light</li>
        </div>
      </div>
    </>
  );
}

export default Square;
