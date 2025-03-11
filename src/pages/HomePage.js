// import face from './face.svg';
import face from '../ani-face.gif';

export const HomePage = () => {
  return (
    <div className="HomePage">
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
          <p>
            welcome.
          </p>
          <p>
            <a href='/thoughts'>
              thoughts.
            </a>
          </p>
        </main>
    </div>
  );
}
