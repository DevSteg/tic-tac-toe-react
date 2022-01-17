import React , {useState} from "react";

export const Board = () => {
  const [board, setBoard ] = useState(["x", "o", "", "", "", "", "", "", ""])
  const [prevTurn, setPrevTurn] = useState('X')
  
  
  const handleClick = (index) => {
    let newBoard = [...board]
    newBoard[index] = prevTurn
    setBoard(newBoard)
  }

  return (
    <div className="Board">
      {board.map((tile, index) => {
        return <div onClick={() => handleClick(index)} className="square" key={index}>{tile}</div>
      })}
    </div>
  )
}