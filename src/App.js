import React, { useState } from 'react';
import Header from './Header'
import './App.css';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  const [toDoList,setToDoList] = useState([]);
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === +id ? { ...task, complete: !task.complete } : { ...task};
    });
    console.log(toDoList,id);
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

  return (
    <div className="App">
      <Header />
      <ToDoList dataList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;
