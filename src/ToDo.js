import React from 'react'

const ToDo = ({value,handleToggle}) => {
    const handleClick = (e)=>{
        e.preventDefault();
        handleToggle(e.currentTarget.id);
    }
  return (
    <div className={value.complete ? "strike" : ""} value={value.id} id={value.id} onClick={handleClick}>{value.task}</div>
  ) 
}

export default ToDo