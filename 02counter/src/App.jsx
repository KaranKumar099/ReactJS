import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10);
  let addVal=()=>{
    if(counter<20){
      setCounter(counter+1);
    }
  }
  let subVal=()=>{
    if(counter>0){
      setCounter(counter-1);
    }
  }
  return (
    <>
      <h2>Small Project</h2>
      <h2>Counter value : {counter}</h2>
      <button onClick={addVal}>Inc Counter</button>---
      <button onClick={subVal}>Dec Counter</button>
    </>
  )
}

export default App
