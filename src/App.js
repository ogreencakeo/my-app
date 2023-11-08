import logo from './logo.svg';
import './App.css';

let isrc = "https://t1.daumcdn.net/cfile/tistory/9960F64E5BC745362B";

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
