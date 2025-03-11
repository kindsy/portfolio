import face from './ani-face.gif';
import { Routing } from './Routing';
import './App.css';

const Year = new Date().getFullYear() + "";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <a href='/'>
            <img src={face} className="App-face" alt="face"/>
        </a>
        <a href="https://www.linkedin.com/in/kailindsay/" target="_blank" rel="noreferrer">
          Kai Lindsay.
        </a>
        <p>
          a narrative portfolio.
        </p>
      </header>
      <main className="App-main">
        <Routing />
      </main>
      <footer className="App-footer">
        <p>
          © {Year} kai lindsay. all rights.
        </p>
      </footer>
    </div>
  );
}

export default App;
