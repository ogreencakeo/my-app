import logo from './logo.svg';
import './App.css';

let isrc = "https://ilovecharacter.com/news/data/20221020/p1065568174920387_228_thum.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={isrc} 
        style={{borderRadius : '50%'}}
        className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          그로밋도 리액트 한다~!
        </a>
      </header>
    </div>
  );
}

export default App;
