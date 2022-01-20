import React from "react";

export const Reset = () => {
  const reloadGame = () => {
    window.location.reload();
  }
  return (
    <button className="reset-btn" onClick={reloadGame}>Reset Game</button>
  )
}