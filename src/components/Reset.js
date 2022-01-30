import React from "react";

export const Reset = ({ setBoard, setWinner }) => {
	const reloadGame = () => {
		setBoard(["", "", "", "", "", "", "", "", ""]);
		setWinner("");
	};
	return (
		<button className="resetBtn" onClick={reloadGame}>
			Reset Game
		</button>
	);
};
