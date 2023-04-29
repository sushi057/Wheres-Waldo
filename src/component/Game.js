import React, { useState, useEffect } from "react";
import anime from "../images/anime.jpg";
import "../styles/Game.css";
import Square from "./Square";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function Game() {
  const [squarePosition, setSquarePosition] = useState({ x: 0, y: 0 });
  const [showSquare, setShowSquare] = useState(false);
  const [ichigoLocations, setIchigoLocations] = useState([]);
  const [lightLocations, setLightLocations] = useState([]);
  const [edwardLocations, setEdwardLocations] = useState([]);
  const tolerance = 300;

  //Record User Mouse Click Locations
  const handleMouseClick = (event) => {
    setSquarePosition({ x: event.pageX - 67, y: event.pageY - 30 });
    setShowSquare(true);
    console.log(event.pageX, event.pageY);
  };

  const handleClick = (event, character) => {
    // Get the x and y coordinates of the user's click event relative to the image
    const rect = event.target.getBoundingClientRect();
    const x = event.pageX - rect.left;
    const y = event.pageY - rect.top;

    // Check if the user clicked within the rectangle area for the specified character
    switch (character) {
      case "Ichigo":
        console.log("ichigo case");
        ichigoLocations.forEach((location) => {
          console.log(location);
          if (
            x >= location[0] - tolerance &&
            x <= location[0] + tolerance &&
            y >= location[1] - tolerance &&
            y <= location[1] + tolerance
          ) {
            console.log("found ichigo");
          }
        });
        break;
      case "Light":
        console.log("light case");
        lightLocations.forEach((location) => {
          if (
            x >= location[0] - tolerance &&
            x <= location[0] + tolerance &&
            y >= location[1] - tolerance &&
            y <= location[1] + tolerance
          ) {
            console.log("found light");
          }
        });
        break;
      case "Edward":
        console.log("edward case");
        edwardLocations.forEach((location) => {
          if (
            x >= location[0] - tolerance &&
            x <= location[0] + tolerance &&
            y >= location[1] - tolerance &&
            y <= location[1] + tolerance
          ) {
            console.log("found edward");
          }
        });
        break;
      default:
        console.log(`Invalid character: ${character}`);
        break;
    }
  };

  //Fetch Character Locations form Firestore
  useEffect(() => {
    const colRef = collection(db, "locations");
    getDocs(colRef)
      .then((snapshot) => {
        let locations = [];
        snapshot.docs.forEach((doc) => {
          locations.push({ ...doc.data(), id: doc.id });
        });
        setIchigoLocations(locations[0].Ichigo);
        setLightLocations(locations[1].Light);
        setEdwardLocations(locations[2].Edward);
        console.log(locations);

        console.log(ichigoLocations, lightLocations, edwardLocations);
      })

      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  //Remove Popup on 'Esc' key press
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setShowSquare(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  //Add click events to all characters
  useEffect(() => {
    const charButtons = document.querySelectorAll(".char-button");
    charButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const character = event.target.textContent;
        handleClick(event, character);
      });
    });
    return () => {
      charButtons.forEach((button) => {
        button.removeEventListener("click", (event) => handleClick(event, ""));
      });
    };
  }, []);

  return (
    <div className="game">
      <img
        src={anime}
        alt="anime tag"
        id="main-picture"
        onClick={handleMouseClick}
      />
      {showSquare && <Square x={squarePosition.x} y={squarePosition.y} />}
    </div>
  );
}

export default Game;
