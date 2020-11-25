import React, { useEffect, useRef } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import NotesForm from './components/NotesForm';

import M from 'materialize-css';

function App() {
  const _noteModalRef = useRef(null);

  // initializes materialized effects
  useEffect(() => {
    M.AutoInit();
    M.Modal.init(_noteModalRef.current);
    return () => {};
  }, []);

  return (
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
      <div id='modal-add-note' className='modal' ref={_noteModalRef}>
        <div className='modal-content'>
          <NotesForm />
        </div>
        <div className='modal-footer'>
          <a
            href='#!'
            className='btn-flat modal-action modal-close waves-effect red white-text'
          >
            Cancel
          </a>{' '}
          <a
            href='#!'
            className='btn-flat modal-action modal-close waves-effect green white-text'
          >
            Ok
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
