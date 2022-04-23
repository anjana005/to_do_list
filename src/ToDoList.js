import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({dataList,handleToggle,handleFilter}) => {
  return (
    <div>
        {
            dataList.map(value=>{
                return (
                    <ToDo {...{handleToggle,value}}/>
                    
                )
            
        })}
        <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
    </div>
  )
}

export default ToDoList