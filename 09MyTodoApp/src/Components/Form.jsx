import { useContext, useState } from 'react'
import { TodoContext } from '../Context/TodoContext'

function Form() {
    let [todo, setTodo]=useState("");
    let {addTodo}=useContext(TodoContext);
    let handleSubmit=(e)=>{
        e.preventDefault();
        if(!todo)    return;
        // console.log("work")
        addTodo({uid: Date.now(), todo, isCompleted: false});
        setTodo("");
    }
    return (
        <form onSubmit={handleSubmit} className='flex justify-center'>
            <input type="text" placeholder='Write Something to do...' 
            className='w-xl bg-gray-300 py-3 px-5' value={todo}
            onChange={(e)=>setTodo(e.target.value)}/>
            <button type="submit" className='px-5 py-3 bg-green-500'>Add</button>
        </form>
    )
}

export default Form