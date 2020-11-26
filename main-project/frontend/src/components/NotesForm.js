import React, { useEffect, useRef, useContext } from 'react';
import StateContext from '../StateContext';

import M from 'materialize-css';

function NotesForm() {
  const _titleInputRef = useRef(null);
  const _descriptionRef = useRef(null);

  const { title, setTitle, description, setDescription } = useContext(
    StateContext
  );

  // initializes materialized effects
  useEffect(() => {
    M.CharacterCounter.init(_titleInputRef.current);
    M.CharacterCounter.init(_descriptionRef.current);
    return () => {};
  }, []);

  return (
    <>
      <h4>Create a new note</h4>
      <div className='row'>
        <form action='' className='col s12'>
          <div className='row'>
            <div className='input-field col s6'>
              <input
                type='text'
                id='input_text'
                data-length='15'
                ref={_titleInputRef}
                value={title}
                onChange={ev => setTitle(ev.target.value)}
              />
              <label htmlFor='input_text'>Title</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <textarea
                id='text_area'
                className='materialize-textarea'
                data-length='150'
                ref={_descriptionRef}
                value={description}
                onChange={ev => setDescription(ev.target.value)}
              ></textarea>
              <label htmlFor='text_area'>Description</label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default NotesForm;
