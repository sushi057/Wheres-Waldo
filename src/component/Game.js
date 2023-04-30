import React, { useState, useEffect } from "react";
import anime from "../images/anime.jpg";
import "../styles/Game.css";
import Square from "./Square";
import Header from "./Header";
import Menu from "./Menu";
import { formatTime } from "../utils/FormatTime";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function Game() {
  const [squarePosition, setSquarePosition] = useState({ x: 0, y: 0 });
  const [showSquare, setShowSquare] = useState(false);
  const [ichigoLocations, setIchigoLocations] = useState([]);
  const [lightLocations, setLightLocations] = useState([]);
  const [edwardLocations, setEdwardLocations] = useState([]);
  const [foundCharacters, setFoundCharacters] = useState([]);
  const [time, setTime] = useState(0);
  const [winTime, setWinTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const tolerance = 100;

  //Timer Functions
  const startTimer = () => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    return intervalId;
  };

  const stopTimer = (intervalId) => {
    clearInterval(intervalId);
  };

  const startGame = () => {
    setShowSquare(false);
    setFoundCharacters([]);
    setTime(0);
    setGameOver(false);
  };

  //Record User Mouse Click Locations
  const handleMouseClick = (event) => {
    setSquarePosition({ x: event.pageX - 67, y: event.pageY - 30 });
    setShowSquare(true);
    console.log(event.pageX, event.pageY);
  };

  const handleCharacterFound = (character) => {
    setFoundCharacters((prevFoundCharacters) => [
      ...prevFoundCharacters,
      character,
    ]);
  };

  const handleClick = (event, character) => {
    // Get the x and y coordinates of the user's click event relative to the image
    const x = event.pageX;
    const y = event.pageY;

    // Check if the user clicked within the rectangle area for the specified character
    switch (character) {
      case "Ichigo":
        console.log("ichigo case");
        if (
          x >= ichigoLocations[0] - tolerance &&
          x <= ichigoLocations[0] + tolerance &&
          y >= ichigoLocations[1] - tolerance &&
          y <= ichigoLocations[1] + tolerance
        ) {
          console.log("found ichigo");
          handleCharacterFound("Ichigo");
        }
        break;
      case "Light":
        console.log("light case");
        if (
          x >= lightLocations[0] - tolerance &&
          x <= lightLocations[0] + tolerance &&
          y >= lightLocations[1] - tolerance &&
          y <= lightLocations[1] + tolerance
        ) {
          console.log("found light");
          handleCharacterFound("Light");
        }
        break;
      case "Edward":
        console.log("edward case");
        if (
          x >= edwardLocations[0] - tolerance &&
          x <= edwardLocations[0] + tolerance &&
          y >= edwardLocations[1] - tolerance &&
          y <= edwardLocations[1] + tolerance
        ) {
          console.log("found edward");
          handleCharacterFound("Edward");
        }
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
        console.log(ichigoLocations, lightLocations, edwardLocations);
      })

      .catch((err) => {
        console.log(err.message);
      });
  }, [ichigoLocations, lightLocations, edwardLocations]);

  //Check if all characters have been found
  useEffect(() => {
    const winTime = null;
    if (
      foundCharacters.includes("Ichigo") &&
      foundCharacters.includes("Edward") &&
      foundCharacters.includes("Light")
    ) {
      setGameOver(true);
      setWinTime(time);
    }
  }, [foundCharacters]);

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
  }, [ichigoLocations, lightLocations, edwardLocations]);

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

  return (
    <div className="game">
      <Menu startTimer={startTimer} />
      <Header
        foundCharacters={foundCharacters}
        startGame={startGame}
        time={time}
        gameOver={gameOver}
      />
      <img
        src={anime}
        alt="anime tag"
        id="main-picture"
        onClick={handleMouseClick}
      />
      {showSquare && (
        <Square
          x={squarePosition.x}
          y={squarePosition.y}
          handleClick={handleClick}
          foundCharacters={foundCharacters}
        />
      )}
      {gameOver && <GameOver time={winTime} />}
    </div>
  );
}

function GameOver({ time }) {
  return (
    <div className="game-over">
      <h1>Congratualtions! You won!</h1>
      <p>Your time: {formatTime(time)}</p>
    </div>
  );
}

export default Game;
