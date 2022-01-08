import React, { useState } from 'react';
import MyButton from './UI/MyButton/MyButton';
import cl from './Task.module.css'

const Task = ({task, ind, remove}) => {

  const [done, setDone] = useState(false);

  let classList = [cl.text];
  if (done) {
    classList.push(cl.asd);
  }

  return (
    <li
      onClick={() => setDone(!done)}
      className={cl.item}>
      <div className={classList.join(' ')}>{ind + 1}. {task.text}</div>
      <div className={cl.btns}>
        {/* <MyButton style={{width: 68.54}}>Edit</MyButton> */}
        <MyButton onClick={() => remove(task)} style={{backgroundColor: 'red', marginLeft: 3}}>
          Delete
        </MyButton>
      </div>
    </li>
  )
};

export default Task;
