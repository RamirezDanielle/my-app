import logo from './obi.png';
import './App.css';



function App() {
  const customStyle = {
    backgroundColor: '#deb887',
  };

  return (
    <div className="App" style={customStyle}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>
        <a
          className="App-link"
          href="https://ramirezdanielle.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here
        </a>
            </code> 
        </p>
      </header>
    </div>
  );
}

export default App;
