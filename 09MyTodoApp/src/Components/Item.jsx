import React, { useContext, useState } from 'react'
import { TodoContext } from '../Context/TodoContext';

function Item({todo}) {
    let [todoMsg, setTodoMsg]=useState(todo.todo);
    let [isTodoEditable, setIsTodoEditable]=useState(false);
    let {deleteTodo, updateTodo, toggleTodo}=useContext(TodoContext);
    let handleToggle=()=>{
        toggleTodo(todo.uid)
    }
    let editTodo=(e)=>{
        if(todo.isCompleted)    return;
        setIsTodoEditable(!e.target.value);
        if(isTodoEditable){
            updateTodo(todo.uid, {...todo});
            setIsTodoEditable(false);
        }
    }
    return (
        <div className={`w-xl flex justify-between items-center py-4 px-8 ${todo.isCompleted ? "bg-green-400" : "bg-yellow-300"}`}>
            <div>
                <input type="checkbox" 
                    checked={todo.isCompleted} 
                    onChange={handleToggle} 
                    className="cursor-pointer mr-4"/>
                <input type="text" 
                    value={todoMsg} 
                    onChange={(e)=>setTodoMsg(e.target.value)} 
                    readOnly={!isTodoEditable}
                    className={`w-sm border outline-none bg-transparent rounded-lg 
                        ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"} 
                        ${todo.isCompleted ? "line-through" : ""}`}/>
            </div>
            <div>
                <button className='bg-white p-2 rounded-full cursor-pointer mr-4' 
                    onClick={editTodo}>{isTodoEditable ? "📂" : "✏️"}</button>
                <button className='bg-white p-2 rounded-full cursor-pointer' 
                    onClick={()=>deleteTodo(todo.uid)}>❌</button>
            </div>
        </div>
    )
}

export default Item