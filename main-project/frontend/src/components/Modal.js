import React, { useRef, useEffect } from 'react';

import M from 'materialize-css';

function Modal({ children }) {
  const _noteModalRef = useRef(null);
  useEffect(() => {
    M.Modal.init(_noteModalRef.current);
    return () => {};
  }, []);

  return (
    <div id='modal-add-note' className='modal' ref={_noteModalRef}>
      {children}
    </div>
  );
}

export default Modal;
