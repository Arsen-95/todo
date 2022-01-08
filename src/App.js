import { useState } from 'react';
import MyInput from './Components/Input/MyInput';
import List from './Components/List';
import PostForm from './Components/PostForm/PostForm';
import Modal from './Components/UI/Modal/Modal';
import MyButton from './Components/UI/MyButton/MyButton';
import cl from './app.module.css';
import Footer from './Components/Footer';

function App() { 
  const [tasks, setTasks] = useState(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []);
  const [visible, setVisible] = useState(false);
  const [query, setQuery] = useState('');
  const create = (item) => {
    if (item) {
      const listTasks = [...tasks, item];
      localStorage.setItem('tasks', JSON.stringify(listTasks));
      setTasks(listTasks);
      setVisible(false);
    }
  };

  const removeTask = task => {
    const listTasks = tasks.filter(t => t.key !== task.key);
    localStorage.setItem('tasks', JSON.stringify(listTasks));
    setTasks(tasks.filter(t => t.key !== task.key));
  };

  const searchedTasks = tasks.filter(t => t.text.toLowerCase().includes(query.toLowerCase()));
  
  

  return (
    <div className="App">
      <div className={cl.container}>
        <h1>ToDo</h1>
        <MyButton
          onClick={() => setVisible(true)}
          style={{marginBottom: 10}}>
          Add a new task
        </MyButton>
        <Modal
          visible={visible}
          setVisible={setVisible}
        >
          <PostForm
            visible={visible}
            create={create}
          />
        </Modal> 
        <MyInput
          onChange={e => setQuery(e.target.value)}
          style={{marginBottom: 20}}
          placeholder='Search'
        /> 
        <List
          searchedTasks={searchedTasks}
          setVisible={setVisible}
          remove={removeTask}
          tasks={searchedTasks}
          setTasks={setTasks}
        />     
        <Footer tasks={searchedTasks}/>
      </div>      
    </div>
  );
}

export default App;
