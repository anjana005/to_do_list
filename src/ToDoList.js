import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({ dataList, handleToggle, removeItem }) => {
  return (
    <div>
      {
        dataList.map(value => {
          return (
            <ToDo {...{ handleToggle, value, removeItem }} />

          )

        })}

    </div>
  )
}

export default ToDoList