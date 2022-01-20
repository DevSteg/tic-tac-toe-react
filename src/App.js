import './App.css';
import { Board } from './components/Board'
import { Reset } from './components/Reset';

const App = () => {
  return ( 
    <div className="App">
      <header>
        <h1>Tic Tac Toe</h1>
      </header>
      <Board />
      <Reset />
    </div>
  );
}

export default App;
