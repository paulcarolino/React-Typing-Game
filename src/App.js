import React, { useState } from "react";
import useWordGame from "./Hooks/useWordGame";
function App() {
  const {
    isGameStart,
    handleChange,
    text,
    textRef,
    timer,
    startGame,
    wordCount,
  } = useWordGame();
  return (
    <div className="App">
      <h1>Typing Game</h1>
      <textarea
        disabled={!isGameStart}
        onChange={handleChange}
        value={text}
        ref={textRef}
      ></textarea>
      <h4>Remaining Time: {timer} </h4>
      <button disabled={isGameStart} onClick={startGame}>
        Start Game
      </button>
      <h1>Word Count: {wordCount} </h1>
    </div>
  );
}

export default App;
