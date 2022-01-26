import React from "react";
import { ResetScoreboard } from "./ResetScoreboard";

export const Scoreboard = ({xWin, oWin, setXWin, setOWin}) => {
  return (
    <div className="scoreboard">
      <h1 className="scoreTitle">Score</h1>
      <h2 className="xScore"><span>X</span> : <span>{xWin}</span></h2>
      <h2 className="oScore"><span>O</span> : <span>{oWin}</span></h2>
      <ResetScoreboard setXWin={setXWin} setOWin={setOWin}/>
    </div>
  )
}