import { useEffect, useState } from 'react'
import Form from './Components/Form'
import Item from './Components/Item'
import { TodoContext } from './Context/TodoContext';

function App() {
  const [todoArr, setTodoArr] = useState([]);
  const addTodo=(todo)=>{
    setTodoArr((prevArr)=>[...prevArr,{...todo}]);
  }
  const deleteTodo=(id)=>{
    setTodoArr((prevArr)=>prevArr.filter((todo)=>todo.uid!=id));
  }
  const updateTodo=(id, nTodo)=>{
    setTodoArr((prevArr)=>prevArr.map((todo)=>todo.uid===id ? nTodo : todo));
  }
  const toggleTodo=(id)=>{
    setTodoArr((prevArr)=>prevArr.map((todo)=>todo.uid===id ? {...todo, isCompleted: !todo.isCompleted} : todo));
  }

  useEffect(()=>{
    const todoArr=JSON.parse(localStorage.getItem("todos"));
    if(todoArr && todoArr.length>0){
      setTodoArr(todoArr);
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todoArr));
  },[todoArr])

  return (
    <TodoContext.Provider value={{todoArr, addTodo, deleteTodo, updateTodo, toggleTodo}}>
      <div className='w-screen min-h-screen bg-slate-700 flex justify-center items-center'>
        <div className='w-3xl min-h-[90vh] bg-orange-400 p-5 flex flex-col items-center'>
          <h1 className='text-2xl text-white text-center mb-5'>MY TO-DO APP</h1>
          <Form />
          {
            todoArr.map((todo)=>[
              <div key={todo.uid} className='w-full mt-3 flex justify-center'>
                <Item todo={todo}/>
              </div>
            ])
          }
        </div>
      </div>
    </TodoContext.Provider>
  )
}

export default App
