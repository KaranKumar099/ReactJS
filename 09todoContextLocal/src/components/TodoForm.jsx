import {useState} from 'react'
import useTodo from '../context/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("");
    const {addTodo} = useTodo();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!todo)   return;
        addTodo({todo, isCompleted: false})
        setTodo("");
    }

    return (
        <form className='flex justify-center py-5' onSubmit={handleSubmit}>
            <input type="text" value={todo} placeholder='Enter something to do...' 
                onChange={(e) => setTodo(e.target.value)}
                className='bg-gray-300 py-2 px-5 w-xl rounded-l-lg'/>
            <button type="submit" 
                className='bg-orange-500 py-2 px-5 rounded-r-lg'
                >Add</button>
        </form>
    )
}

export default TodoForm