import { useState } from 'react';

import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

import './App.css';

function App(props) {
  const [listOfTasks, setListOfTasks] = useState([]);

  function addTask(task) {
    // Do something.
    // setListOfTasks([...listOfTasks, task]);
    setListOfTasks(currList => [...currList, task]);
  }

  function deleteTask(taskNum = null) {
    // const newList = [...listOfTasks].filter(t => t !== task);
    let newList = [...listOfTasks];
    if (taskNum !== null) {
      newList = newList.slice(0, taskNum).concat(newList.slice(taskNum + 1));
    }
    setListOfTasks(newList);
  }

  return (
      <main className="main">
        <h1>Todos</h1>
        <div className="tasks">
          <TaskInput newTask={addTask} />
          <TaskList tasks={listOfTasks} deleteTask={deleteTask} />
        </div>
      </main>
  )
}

export default App
