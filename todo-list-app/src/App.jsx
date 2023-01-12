import React, { useState } from 'react'
import { Button } from "antd";
import ToDoItem from './components/ToDoItem'
import ToDoContainer from './components/ToDoContainer'
import ToDoFilter from './components/ToDoFilter'
import { STATUS } from './config/status';

function App () {
  const [todos, setTodos] = useState([])
  // 0 1
  const [filterStatus, setFilterStatus] = useState(`${STATUS.IS_CREATE}, ${STATUS.IS_DONE}`)

  const handleSubmit = (todoItem) => {
    console.log(todoItem, 'APP-todoItem');
    setTodos([
      ...todos,
      todoItem
    ])
  }

  const handleOperate = (todoItem) => {
    console.log(todoItem, 'todoItem');
    const newTodos = todos.filter(todo => todo.id !== todoItem.id)
    newTodos.push(todoItem)
    setTodos(newTodos)
  }

  const handleStatusChange = (status) => {
    setFilterStatus(status)
  }
  return (
    <div className="todo-app">
      <h2 className='todo-title'>待办清单</h2>
      <ToDoItem onSubmit={handleSubmit} />
      <ToDoFilter filterStatus={filterStatus} onFilterStatus={handleStatusChange} />
      <ToDoContainer filterStatus={filterStatus} todos={todos} onOperate={handleOperate} />
    </div>
  )
}

export default App
