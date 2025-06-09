import { createContext } from "react";

export const TodoContext=createContext({
    todoArr: [],
    addTodo: (todo)=>{},
    deleteTodo: (id)=>{},
    updateTodo: (id, nTodo)=>{},
    toggleTodo: (id)=>{},
});
