import { createContext, useContext } from 'react'

export const TodoContext = createContext({
    todos:[
        {
            id: 2,
            title: "learn something new",
            isCompleted: false,
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id, title)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}
});

const useTodo = () => {
    return useContext(TodoContext);
}

export default useTodo