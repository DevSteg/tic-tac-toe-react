import React from "react";

export const ResetScoreboard = ({ setXWin, setOWin }) => {
	const resetSb = () => {
		setXWin(0);
		setOWin(0);
	};
	return (
		<button className="resetSb" onClick={resetSb}>
			Reset Scoreboard
		</button>
	);
};
