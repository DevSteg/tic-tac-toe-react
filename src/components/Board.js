import React , {useEffect, useState} from "react";
import { Reset } from "./Reset";

export const Board = () => {

  const [board, setBoard ] = useState(["", "", "", "", "", "", "", "", ""])
  const handleClick = (index) => {
    let newBoard = [...board]
    newBoard[index] = prevTurn
    setBoard(newBoard)
  }

  const [prevTurn, setPrevTurn] = useState('X')
  useEffect(() => {
    setPrevTurn(prev => prev === 'X' ? 'O':'X')
  }, [board])
  
  useEffect(() => {
    let win_pattern = [
      [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]
    
    for(let i in win_pattern) {
      const [a, b, c] = win_pattern[i];
      if(board[a] && board[a] === board[b] && board[a] === board[c]) {
        alert(`The winner is ${board[a]}`)
      }
    }
  }, [board])

  return (
    <main>
      <div className="Board">
        {board.map((tile, index) => {
          return <div onClick={() => handleClick(index)} className="square" key={index}>{tile}</div>
        })}
      </div>
      <Reset setBoard={setBoard}/>
    </main>
  )
}