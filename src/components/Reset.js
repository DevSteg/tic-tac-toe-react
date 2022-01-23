import React from "react";

export const Reset = ({setBoard}) => {
  const reloadGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""])
  }
  return (
    <button className="resetBtn" onClick={reloadGame}>Reset Game</button>
  )
}