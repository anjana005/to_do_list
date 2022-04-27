import React from 'react'

const ToDo = ({ value, handleToggle, removeItem }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  }
  const handleRemove = (e) => {
    e.preventDefault();
    removeItem(e.currentTarget.id);
  }
  return (
    <div className="m-1 text-white font-semibold  mx-auto flex flex-row  w-96 bg-gray-700 justify-between rounded-md" >
      <div value={value.id} id={value.id} onClick={handleClick}  className="p-1 m-1 w-96">
        <div className={"justify-content-left " + (value.complete ? "line-through" : "")} >{value.task}</div>
      </div>
      <div value={value.id} id={value.id} className="flex flex-row text-center bg-gray-300 place-items-center cursor-pointer" onClick={handleRemove}>
        <div  className="text-red-400 font-bold  font-lg  w-5  rounded-md">X</div>
      </div>
    </div>
  )
}

export default ToDo