import React,{useState} from 'react'

const ToDoForm = ({addTask}) => {    
    const [userInput,setUserInput] = useState('');
    const handleChange = (e) => {
        setUserInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
  return (
    <div>
        <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
        <button type="submit" onClick={handleSubmit}>Add Task</button>
    </div>
  )
}

export default ToDoForm