import React, { useEffect, useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import ModalNotes from './components/ModalNotes';
import StateContext from './StateContext';

import M from 'materialize-css';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // initializes materialized effects
  useEffect(() => {
    M.AutoInit();
    return () => {};
  }, []);

  return (
    <StateContext.Provider
      value={{ title, setTitle, description, setDescription }}
    >
      <div className='App'>
        <Navbar />
        <Notes />
        <div className='fixed-action-btn'>
          <a
            href='#modal-add-note'
            className='btn-floating btn-large waves-effect waves-light red lighten-1 modal-trigger'
          >
            <i className='material-icons'>add</i>
          </a>
        </div>
        <ModalNotes />
      </div>
    </StateContext.Provider>
  );
}

export default App;
