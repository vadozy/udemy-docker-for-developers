import React, { useContext } from 'react';
import StateContext from '../StateContext';

function ModalFooter() {
  const { title, description } = useContext(StateContext);

  function isValid() {
    return (
      title.length > 0 &&
      title.length <= 15 &&
      description.length > 0 &&
      description.length <= 150
    );
  }

  return (
    <div className='modal-footer'>
      <a
        style={{ marginRight: '1rem' }}
        href='#!'
        className='btn-flat modal-action modal-close waves-effect red white-text'
      >
        Cancel
      </a>
      <a
        href='#!'
        className={`btn-flat modal-action modal-close waves-effect green white-text ${
          isValid() ? null : 'disabled'
        }`}
      >
        Ok
      </a>
    </div>
  );
}

export default ModalFooter;
