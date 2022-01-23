import './App.css';
import { Board } from './components/Board'

const App = () => {
  return ( 
    <div className="App">
      <header>
        <h1 className='title'>Tic Tac Toe</h1>
      </header>
      <Board />
    </div>
  );
}

export default App;
