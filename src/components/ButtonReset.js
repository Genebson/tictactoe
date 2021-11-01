import './buttonreset.css'

export const ResetBoard = ({resetGame, startGame}) => {
  return (
    <div className="btn-container">
      <div className="div-reset-game">
        <button className="btn-reset-game" onClick={resetGame}>Reset Game</button>
      </div>
      <div className="div-new-game">
        <button className="btn-new-game" onClick={startGame}>New game</button>
      </div>
    </div>
  )
}