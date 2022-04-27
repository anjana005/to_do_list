import React, { useState } from 'react'

const ToDoForm = ({ addTask, handleFilter }) => {
  const [userInput, setUserInput] = useState('');
  const handleChange = (e) => {
    setUserInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  }
  return (
    <div className="flex flex-row justify-center">
      <div className="space-y-4">
        <div>
          <input value={userInput} type="text" onChange={handleChange} className="rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Enter task..." />
          <button type="submit" onClick={handleSubmit} className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-2 uppercase border-yellow-500 border-t border-b border-r">Add Task</button>
        </div>

        <div>
          <button onClick={handleFilter} className="px-3 py-1 rounded-md bg-red-500 text-gray-800 font-semibold border-gray-500">Clear Completed</button>
        </div>
      </div>
    </div>
  )
}

export default ToDoForm