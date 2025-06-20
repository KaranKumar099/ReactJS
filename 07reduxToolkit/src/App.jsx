import {increment, decrement, incrementByValue, decrementByValue} from './features/Slice'
import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react';

function App() {
  const val=useSelector((state)=>(state.counter.value));
  const dispatch=useDispatch();
  const [incNum, setIncNum] = useState();
  const [decNum, setDecNum] = useState();

  return (
    <>
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-8'>
      <h1 className='text-4xl'>Counter Game</h1>
      <h1 className='text-2xl'>{val}</h1>
      <div className='flex gap-5 flex-row-reverse'>
        <form onSubmit={(e)=>{
          e.preventDefault();
          dispatch(incrementByValue(incNum));
          }} className='flex flex-col'>
          <input type='number' placeholder='Increment By Value' value={incNum} className='bg-gray-300 p-2'
            onChange={(e)=>setIncNum(e.target.value)}></input>
        </form>
        <button className='px-5 py-2 text-lg bg-blue-500 rounded-lg' 
          onClick={()=>dispatch(increment())}>Increment By 1</button>
        <button className='px-5 py-2 text-lg bg-blue-500 rounded-lg' 
          onClick={()=>dispatch(decrement())}>Decrement By 1</button>
        <form onSubmit={(e)=>{
          e.preventDefault();
          dispatch(decrementByValue(decNum));
          }} className='flex flex-col'>
          <input type='number' placeholder='Decrement By Value' value={decNum} className='bg-gray-300 p-2'
            onChange={(e)=>setDecNum(e.target.value)}></input>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
