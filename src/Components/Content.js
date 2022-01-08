import React, { useState } from 'react';
import MyInput from './Input/MyInput';
import List from './List';

const Content = ({tasks, setTasks}) => {

  
  
  const [query, setQuery] = useState('');

  

  return (
    <div>
      <MyInput
        placeholder='Search'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <List
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  )
};

export default Content;
