import React, { useState } from "react";
import { Input, Button } from "antd";
import { STATUS } from '../../config/status'
import { CloseCircleTwoTone } from '@ant-design/icons'
// const todoItem = {
//     id: 123,
//     // 文本内容
//     content: 'xxx',
//     // 状态:已完成、已删除
//     status: 0
// }
const ToDoItem = (props) => {
    const { onSubmit } = props

    const [todoItem, setTodoItem] = useState({})

    const handleChange = (event) => {
        setTodoItem({
            // Math.random() 随机生成，类似雪花算法
            id: Math.random(),
            content: event.target.value,
            status: STATUS.IS_CREATE
        })
    }

    const handleSubmit = () => {
        if (todoItem.content) { onSubmit && onSubmit(todoItem) }
        else { alert('请输入内容！') }

    }

    const handleClear = () => {
        setTodoItem({
            content: '',
        })
    }

    return (
        <div className="todo-item-input">
            {/* onPressEnter 回车事件 */}
            <Input value={todoItem.content} onPressEnter={handleSubmit} onChange={handleChange} />
            <CloseCircleTwoTone onClick={handleClear} className='todo-item-clear-icon' />
            <Button size="large" type="primary" onClick={handleSubmit}>提交</Button>
        </div>
    )
}

export default ToDoItem