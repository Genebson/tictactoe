import { useEffect } from "react";
import { useState } from "react";
import noteHigh from './assets/sounds/note-high.mp3'
import noteLow from './assets/sounds/note-low.mp3'
import gameOverTie from './assets/sounds/game-over-tie.mp3'
import gameOver from './assets/sounds/game-over.mp3'

export const useTicTacToeGameState = () => {
  const [tiles, setTiles] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [count, setCount] = useState({'X': 0, 'O': 0, 'tie': 0});
  const [computerMode, setComputerMode] = useState(false);

  const checkGameStatus = tiles => {
    const gameOverSound = new Audio(gameOver)
    const solutions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    const winnerSolution = solutions.find(([a, b, c]) => tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]);
    if (winnerSolution) {
      const winner = tiles[winnerSolution[0]];
      gameOverSound.play()
      return winner
    }
    return null
  }

  const winner = checkGameStatus(tiles);
  const gameEnded = tiles.every(tile => tile !== '') || winner !== null

  const playerXSound = new Audio(noteHigh);
  const playerOSound = new Audio(noteLow);
  const tieSound = new Audio(gameOverTie);

  useEffect(() => {
    if (winner === 'X') {
      setCount(count => ({...count, 'X': count['X'] + 1}))
    } else if (winner === 'O') {
      setCount(count => ({...count, 'O': count['O'] + 1}))
    }
  }, [winner])

  useEffect(() => {
    if (computerMode === true) {
      setCount({'X': 0, 'O': 0, 'tie': 0})
    } else if (computerMode === false) {
      setCount({'X': 0, 'O': 0, 'tie': 0} )
    }
  }, [computerMode])
  
  const setTileTo = (index, player, computerMode) => {
    if (gameEnded) return;
    if (tiles[index] !== '') return;

    const newTiles = [...tiles]
    newTiles[index] = player
    const newPlayer = player === 'X' ? 'O' : 'X'

    if (player === 'X') playerXSound.play()
    if (player === 'O') playerOSound.play()
    if (!newTiles.includes('')) {
      setCount(() => ({...count, 'tie': count['tie'] + 1}))
      tieSound.play()
    }

    setTiles(() => {
      if (computerMode === false) {
        setCurrentPlayer(newPlayer)
        return newTiles;
      }

      if (computerMode === true) {
        const indexAi = aiMoves(tiles);
        console.log(indexAi);
        newTiles[indexAi] = 'O'
        if (newTiles[indexAi] === 'O') {
          playerOSound.play()
        }
        console.log(newTiles);
        return newTiles
      }
    })
  }

  const resetGame = () => {
    setTiles(Array(9).fill(''))
  }

  const startGame = () => {
    setTiles(Array(9).fill(''))
    setCount({'X': 0, 'O': 0, 'tie': 0})
  }

  const aiMoves = (prevTiles) => {
    const emptyTileAmount = prevTiles.filter(tile => tile === '').length
    const index = Math.floor(Math.random() * emptyTileAmount)
    let nonSkippedTileIndex = 0;
    for (let i = 0; i < prevTiles.length; i++) {
      if (prevTiles[i] === '') {
        if (nonSkippedTileIndex === index) return i;
        nonSkippedTileIndex++
      }
    } 
  }

  return { 
    tiles,
    currentPlayer,
    winner,
    gameEnded,
    setTileTo,
    resetGame,
    count,
    setCount,
    aiMoves,
    computerMode,
    setComputerMode,
    startGame
  };
}