import { ScoreTable } from './ScoreTable'
import { useState } from 'react'
import './header.css'

export const Header = ({count, setComputerMode, resetGame}) => {
  const [clicked, setClicked] = useState(true);

  return (
    <div className="header-container">
      <div className="header">
        <h1>Tic Tac Toe</h1>
        <ul>
          <li className={`type-game ${clicked ? 'active' : ''}`} onClick={() => {setClicked(!clicked); setComputerMode(false); resetGame()}}>Two Players</li>
          <li className={`type-game ${!clicked ? 'active' : ''}`} onClick={() => {setClicked(!clicked); setComputerMode(true); resetGame()}}>Versus Computer</li>
        </ul>
        <div className="new-game">
        <ScoreTable count={count}/>
        </div>
      </div>
    </div>
  )
}