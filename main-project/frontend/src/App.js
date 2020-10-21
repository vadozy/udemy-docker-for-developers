import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ result, setResult ] = useState('');
  useEffect(() => {
    //setResult('VADIM');
    (async () => {
      const result = await axios.get('http://localhost:3001/test');
      setResult(result.data);
    })();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          The respones from axios is {result}
        </a>
      </header>
    </div>
  );
}

export default App;
