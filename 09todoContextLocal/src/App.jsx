import { useEffect, useState } from 'react'
import { TodoContext } from './context/TodoContext'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prevTodo)=>([...prevTodo,{...todo, id: Date.now()}]));
  }
  const updateTodo = (id, todo) => {
    setTodos((prevTodo)=>(prevTodo.map((curTodo)=>(curTodo.id===id ? todo : curTodo))))
  }
  const deleteTodo = (id) => {
    setTodos((prevTodo)=>(prevTodo.filter((curTodo)=>curTodo.id!==id)))
  }
  const toggleComplete = (id) => {
    setTodos((prevTodo)=>(prevTodo.map((curTodo)=>(curTodo.id===id ? {...curTodo, isCompleted: !curTodo.isCompleted} : curTodo))))
  }

  useEffect(()=>{
    let todos=JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length>0){
      setTodos(todos);
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <TodoContext.Provider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] w-screen min-h-screen flex flex-col items-center gap-8 p-8">
        <div className='w-3xl min-h-[90vh] h-fit bg-blue-400 rounded-md flex flex-col items-center p-5'>
          <h1 className="text-2xl font-bold text-center text-white">Manage Your Todos</h1>
          <div className="mb-4">
              <TodoForm />
          </div>
          <div>
              {todos.map((todo) => (
                <div key={todo.id}
                className='w-full mb-4'
                >
                  <TodoItem todo={todo} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </TodoContext.Provider>
  )
}

export default App
