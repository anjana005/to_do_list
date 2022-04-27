import React, { useState } from 'react';
import Header from './Header'
import './App.css';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === +id ? { ...task, complete: !task.complete } : { ...task };
    });
    
    setToDoList(mapped);

  }
  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }


  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const removeItem = (id) => {
    let filtered = toDoList.filter(task => task.id !== parseInt(id));
    setToDoList(filtered);
  }

  return (
    <div className="App">
      <Header />
      <ToDoForm addTask={addTask} handleFilter={handleFilter} />
      <ToDoList dataList={toDoList} handleToggle={handleToggle} removeItem={removeItem} />
    </div>
  );
}

export default App;
