// import face from './face.svg';
import face from './ani-face.gif';
import './App.css';

const Year = new Date().getFullYear() +"";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://www.linkedin.com/in/kailindsay/" target="_blank" rel="noreferrer">
          <img src={face} className="App-face" alt="face"/>
        </a>
        <p>
          a narrative portfolio.
        </p>
      </header>
      <main className="App-main">
        <p>
          UX/UI is my passion.
        </p>
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
