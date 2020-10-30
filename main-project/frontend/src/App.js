import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [result, setResult] = useState('');
  const [mongoHealth, setMongoHealth] = useState('fail');

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL || 'localhost';
    const API_PORT = process.env.REACT_APP_API_PORT || '3001';
    const API_BASE_URL = `http://${API_URL}:${API_PORT}/test`;
    console.log('Request on address ', API_BASE_URL);

    const fetchData = async () => {
      //const result = await axios.get('http://localhost:3001/test');
      const result = await axios.get(API_BASE_URL);
      setResult(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const result = await axios.get('http://localhost:3001/healthcheck');
        setMongoHealth(result.data.status);
      } catch (err) {
        setMongoHealth('fail');
      }
    };
    const checkStatusTimerId = setInterval(() => checkHealth(), 1000);
    return () => {
      clearInterval(checkStatusTimerId);
    };
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React The respones from axios is {result}
        </a>
        <h4>MongoDb connection status: {mongoHealth}</h4>
      </header>
    </div>
  );
}

export default App;
