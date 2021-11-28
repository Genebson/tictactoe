import React from "react";
import { Board } from "./components/Board";
import { Header } from "./components/Header";
import { useTicTacToeGameState } from "../src/useTicTacToeGameState";

function App() {
  const { 
    tiles,
    currentPlayer,
    winner,
    gameEnded,
    setTileTo,
    resetGame,
    count,
    setCount,
    aiMoves,
    setComputerMode,
    computerMode,
    startGame
  } = useTicTacToeGameState()
  return (
    <div className="App">
      <Header count={count} aiMoves={aiMoves} setComputerMode={setComputerMode} resetGame={resetGame}/>
      <Board computerMode={computerMode} count={count} setCount={setCount} tiles={tiles} setTileTo={setTileTo} currentPlayer={currentPlayer} winner={winner} gameEnded={gameEnded} resetGame={resetGame} aiMoves={aiMoves} startGame={startGame}/>
    </div>
  );
}

export default App;
