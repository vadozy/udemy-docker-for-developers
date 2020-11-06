import React from 'react';

function Note({ note, handleDelete }) {
  return (
    <div className='col s12 m6 l4'>
      <div className='card'>
        <div className='card-stacked'>
          <div className='card-content'>
            <span className='card-title'>{note.title}</span>
            <p>{note.description}</p>
          </div>
          <div className='card-action'>
            <button
              className='waves-effect waves-light btn green lighten-1'
              style={{ marginRight: '1rem' }}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(note._id)}
              className='waves-effect waves-purple btn red lighten-2'
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
