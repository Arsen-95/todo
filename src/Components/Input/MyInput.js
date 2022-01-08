import React from 'react';
import cl from './MyInput.module.css';

const MyInput = (props) => {

  return (
    <div>
      <input
        className={cl.myInput}
        {...props}
      />
    </div>
  )
};

export default MyInput;
