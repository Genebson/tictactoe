import './board.css'
import { Square } from "./Square"
import { ResetBoard } from './ButtonReset'

export const Board = ({tiles, setTileTo, currentPlayer, resetGame, aiMoves, computerMode, startGame}) => {
  return(
    <>
      <div className="main-game">
        <div className="main-board">
          {tiles.map((tile, i) => (
            <Square key={i} i={i} value={tile} onClick={() => setTileTo(i, currentPlayer, computerMode)} aiMoves={aiMoves}/>
          ))}
        </div>
      </div>
      <ResetBoard resetGame={resetGame} startGame={startGame}/>
    </> 
  )
}