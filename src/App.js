import face from './face.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={face} className="App-face" alt="face"/>
        <p>
          A narrative portfolio.
        </p>
      </header>
    </div>
  );
}

export default App;
