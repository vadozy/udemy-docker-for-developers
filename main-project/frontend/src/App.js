import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL || 'localhost';
const API_PORT = process.env.REACT_APP_API_PORT || '8080';

function App() {
  const [result, setResult] = useState('');
  const [mongoHealth, setMongoHealth] = useState('fail');

  useEffect(() => {
    const API_BASE_URL = `http://${API_URL}:${API_PORT}/api/test`;
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
        const result = await axios.get(
          `http://${API_URL}:${API_PORT}/api/healthcheck`
        );
        setMongoHealth(result.data.status);
      } catch (err) {
        setMongoHealth('fail');
      }
    };
    setTimeout(() => checkHealth(), 500);
    const checkStatusTimerId = setInterval(() => checkHealth(), 10000);
    return () => {
      clearInterval(checkStatusTimerId);
    };
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          The respones from axios is {result}
        </a>
        <h4>MongoDb connection status: {mongoHealth}</h4>
      </header>
    </div>
  );
}

export default App;
