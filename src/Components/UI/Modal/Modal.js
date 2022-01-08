import React, { useState } from 'react';
import cl from './Modal.module.css'

function Modal({visible, setVisible, children}) {

  let classes = [cl.modal];

  if (visible) {
    classes.push(cl.active);
  }

  return (
    <div 
      onClick={() => setVisible(false)}
      className={classes.join(' ')}
      >
      <div 
        onClick={(e) => e.stopPropagation()}
        className={cl.modal__content}>{children}</div>
    </div>
  )
};

export default Modal;
