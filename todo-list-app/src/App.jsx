import React from 'react'
import { Button } from "antd";
import ToDoItem from './components/ToDoItem'

function App () {

  return (
    <div className="todo-app">
      <h2 className='todo-title'>待办清单</h2>
      <ToDoItem />
    </div>
  )
}

export default App
