import React, { useState } from "react";
import { Input, Button } from "antd";
import { STATUS } from '../../config/status'
// const todoItem = {
//     id: 123,
//     // 文本内容
//     content: 'xxx',
//     // 状态:已完成、已删除
//     status: 0
// }
const ToDoItem = (props) => {
    const { onSubmit } = props

    const [todoItem, setTodoItem] = useState({
        // Math.random() 随机生成，类似雪花算法
        id: Math.random(),
        content: 'xxxxxxxxxxxxxxxx',
        status: STATUS.IS_CREATE
    })

    const handleChange = (event) => {
        setTodoItem({
            ...todoItem,
            content: event.target.value
        })
    }

    const handleSubmit = () => {
        onSubmit && onSubmit(todoItem)

    }

    return (
        <div className="todo-item-input">
            {/* onPressEnter 回车事件 */}
            < Input value={todoItem.content} onPressEnter={handleSubmit} onChange={handleChange} />
            <Button size="large" type="primary" onClick={handleSubmit}>提交</Button>
        </div>
    )
}

export default ToDoItem