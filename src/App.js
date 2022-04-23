import React, { useState } from 'react';
import Header from './Header'
import data from './data.json'
import './App.css';
import ToDoList from './ToDoList';

function App() {
  const [toDoList,setToDoList] = useState(data);
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === +id ? { ...task, complete: !task.complete } : { ...task};
    });
    console.log(toDoList,id);
    setToDoList(mapped);

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
    </div>
  );
}

export default App;
