import React, { useEffect, useState } from "react";
import { Reset } from "./Reset";
import { Scoreboard } from "./Scoreboard";
import { WinnerAlert } from "./WinnerAlert";

// Winning combinations array
let win_pattern = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

export const Board = () => {
	// Set Board state and function for handleclick
	const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
	const handleClick = (index) => {
		let newBoard = [...board];
		newBoard[index] = prevTurn;
		setBoard(newBoard);
	};

	// Set prevTurn state and useEffect for switching between X and O
	const [prevTurn, setPrevTurn] = useState("X");
	useEffect(() => {
		setPrevTurn((prev) => (prev === "X" ? "O" : "X"));
	}, [board]);

	// Set winner state and useEffect for checking and setting the winner of the round
	const [winner, setWinner] = useState("");
	useEffect(() => {
		for (let i in win_pattern) {
			const [a, b, c] = win_pattern[i];
			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				if (board[a] === "X") {
					setWinner("X");
				} else if (board[a] === "O") {
					setWinner("O");
				}
			}
		}
	}, [board]);

	// Set X and O count state and useEffect for counting each winner
	const [xWin, setXWin] = useState(0);
	const [oWin, setOWin] = useState(0);
	useEffect(() => {
		if (winner !== "") {
			if (winner === "X") {
				setXWin((prev) => prev + 1);
			} else if (winner === "O") {
				setOWin((prev) => prev + 1);
			}
		}
	}, [winner]);

	return (
		<main>
			<WinnerAlert setBoard={setBoard} winner={winner} setWinner={setWinner} />
			<section>
				<div className="board">
					{/* function for creating each sqaure on the game board */}
					{board.map((tile, index) => {
						return (
							<div
								onClick={() => handleClick(index)}
								className="square"
								key={index}
							>
								{tile}
							</div>
						);
					})}
				</div>
				<Reset setBoard={setBoard} />
			</section>
			<aside>
				<Scoreboard
					xWin={xWin}
					oWin={oWin}
					setOWin={setOWin}
					setXWin={setXWin}
				/>
			</aside>
		</main>
	);
};
