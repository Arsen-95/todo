import React, { useState } from 'react';
import MyInput from '../Input/MyInput';
import MyButton from '../UI/MyButton/MyButton';

const PostForm = ({create, auto, visible}) => {

  const [value, setValue] = useState({text: ''});
  const newTask = e => {
    e.preventDefault();
    const newTask = {...value, key: Math.random()};
    if (value.text) {
      create(newTask);
      setValue({text: ''});
    }
  };
  
  return (
    <form 
    onSubmit={e => {e.preventDefault(); newTask(e)}}>
      <MyInput
        required='required'
        autoFocus='autoFocus'
        onChange={(e) => setValue({text: e.target.value})}
        value={value.text} placeholder='Write what you should do'/>
      <MyButton type='button' onClick={newTask}>Add</MyButton>
    </form>
  )
};

export default PostForm;
