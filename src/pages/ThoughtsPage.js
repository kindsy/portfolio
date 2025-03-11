import Thought from '../ThoughtCanvas';

export const ThoughtsPage = () => {
    return (
        <div className="ThoughtsPage">
        <header className="App-header">
            <a href='/'>
                {/* <img src={face} className="App-face" alt="face"/> */}
            </a>
            <p>
            a place for thoughts.
            </p>
        </header>
        <main className="App-main">
            <p>
                today's thought:
            </p>

            <Thought />
        </main>
        </div>
    );
}