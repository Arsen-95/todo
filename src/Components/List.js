import React from 'react';
import Task from './Task';

const List = ({tasks, remove, searchedTasks}) => {


  if (!searchedTasks.length) {
    return (
      <h2>You have no tasks</h2>
    )
  }

  return (
    <ul>
      {tasks.map((task, ind) => 
        <Task
          remove={remove}
          key={task.key}
          task={task}
          ind={ind}
        />
      )}
    </ul>
  )
};

export default List;
