import React, { useState } from 'react'
import { Button } from "antd";
import ToDoItem from './components/ToDoItem'

function App () {
  const [todos, setTodos] = useState([])

  const handleSubmit = (todoItem) => {
    console.log(todoItem, 'APP-todoItem');
    setTodos([
      ...todos,
      todoItem
    ])

  }

  return (
    <div className="todo-app">
      <h2 className='todo-title'>待办清单</h2>
      <ToDoItem onSubmit={handleSubmit} />
    </div>
  )
}

export default App
