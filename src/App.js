import { Routing } from './Routing';
import './App.css';

const Year = new Date().getFullYear() + "";

const App = () => {
  return (
    <div className="App">

      <Routing />
      
      <footer className="App-footer">
        <p>
          © {Year} kai lindsay. all rights.
        </p>
      </footer>
    </div>
  );
}

export default App;
