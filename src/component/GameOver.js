

function GameOver({ time }) {
  return (
    <div className="game-over">
      <h1>Game Over!</h1>
      <p>Your time: {formatTime(time)}</p>
    </div>
  );
}
