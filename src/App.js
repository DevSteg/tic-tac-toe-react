import "./App.css";
import { Board } from "./components/Board";

const App = () => {
	return (
		<div className="App">
			<header>
				<h1 className="title">
					Tic <span>Tac</span> Toe
				</h1>
			</header>
			<Board />
		</div>
	);
};

export default App;
