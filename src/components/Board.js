import React , {useState} from "react";

export const Board = () => {
  
  const [prevTurn, setPrevTurn] = useState('X')
  const changeTurn = () => {
    setPrevTurn(prev => prev === 'X' ? 'O':'X')
  }
  
  const [board, setBoard ] = useState(["", "", "", "", "", "", "", "", ""])
  const handleClick = (index) => {
    let newBoard = [...board]
    newBoard[index] = prevTurn
    setBoard(newBoard)
    let win_pattern = [
      [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]
    
    for(let i in win_pattern) {
      const [a, b, c] = win_pattern[i];
      if(board[a] && board[a] === board[b] && board[a] === board[c]) {
        alert("Winner")
      }
      return null
    }
    changeTurn()
  }

  return (
    <div className="Board">
      {board.map((tile, index) => {
        return <div onClick={() => handleClick(index)} className="square" key={index}>{tile}</div>
      })}
    </div>
  )
}