import React, { useState } from 'react'
import useTodo from '../context/TodoContext'

function TodoItem({todo}) {
    const [isEditable, setIsEditable]=useState(false);
    const [todoMsg, setTodoMsg]=useState(todo.todo);
    const {updateTodo, deleteTodo, toggleComplete}=useTodo();

    const editTodo=()=>{
        updateTodo(todo.id,{...todo,title: todoMsg});
        setIsEditable(false);
    }
    return (
        <div className='w-xl p-5 rounded bg-yellow-300 flex justify-between items-center'>
            <div className='mr-4'>
                <input type="checkbox"
                    className="cursor-pointer"
                    checked={todo.isCompleted}
                    onChange={()=>toggleComplete(todo.id)}
                />
            </div>
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.isCompleted ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isEditable}
            />
            <div className='flex'>
                <button className='p-2 bg-gray-200 rounded-full cursor-pointer' 
                    onClick={() => {
                        if (todo.isCompleted) return;
                        if (isEditable) {
                            editTodo();
                        } else setIsEditable((prev) => !prev);
                    }}
                >{isEditable ? "📁" : "✏️"}</button>
                <button className='p-2 ml-4 bg-gray-200 rounded-full cursor-pointer' 
                    onClick={()=>deleteTodo(todo.id)}
                >del</button>
            </div>
        </div>
    )
}

export default TodoItem