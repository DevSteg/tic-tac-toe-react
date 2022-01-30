import React from "react";
import { Reset } from "./Reset";

export const WinnerAlert = ({ winner, setBoard, setWinner }) => {
	if (winner !== "") {
		return (
			<div className="winnerAlert">
				<div>
					<h1 className="winnerTitle">
						<span>{winner}</span> is the winner!
					</h1>
					<Reset setBoard={setBoard} setWinner={setWinner} />
				</div>
			</div>
		);
	}
	return null;
};
