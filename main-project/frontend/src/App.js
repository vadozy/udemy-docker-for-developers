import React, { useEffect } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Notes from './components/Notes';

import M from 'materialize-css';

function App() {
  // initializes materialized effects
  useEffect(() => {
    M.AutoInit();
    return () => {};
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <Notes />
    </div>
  );
}

export default App;
