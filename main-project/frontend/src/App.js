import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ result, setResult ] = useState('');
  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL || 'localhost';
    const API_PORT = process.env.REACT_APP_API_PORT || '3001';
    const API_BASE_URL = `http://${API_URL}:${API_PORT}/test`;
    console.log('Request on address ', API_BASE_URL);
    (async () => {
      //const result = await axios.get('http://localhost:3001/test');
      const result = await axios.get(API_BASE_URL);
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
