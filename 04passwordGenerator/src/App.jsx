import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  let passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed)  str+="0123456789";
    if(charAllowed) str+="!@#$%^&*()_-+=<>?/[]{}\|~";

    for(let i=0;i<length;i++){
      pass+=str.charAt(Math.floor(Math.random()*str.length+1));
    }

    setPassword(pass);
  },[length,numAllowed,charAllowed])

  // if there is any change in dependencies, this will reload the page.
  useEffect(()=>{
    passwordGenerator();
  },[length,numAllowed,charAllowed])

  let passRef=useRef(null);   // to get reference
  let copyPassToClipboard = () => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }

  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center'>
        <div className='w-2xl text-white bg-gray-700 py-3'>
          <h1 className='rounded-3xl text-center text-white text-2xl'>Password Generator</h1>
          <div className='flex justify-center my-2'>
            <input type="text" value={password} ref={passRef} readOnly
              className="bg-gray-400 h-12 w-xl px-4 text-[20px] flex items-center rounded-l-full outline-0"/>
            <button className='bg-blue-500 w-fit px-4 flex items-center rounded-r-full cursor-pointer'
              onClick={copyPassToClipboard}>Copy</button>
          </div>
          <input type="range" min={8} max={50} 
            value={length} 
            onChange={(e)=>setLength(e.target.value)} 
            className='ml-5 cursor-pointer'/>
          <label htmlFor="" className='ml-5 mr-25'>Length : {length}</label>
          <input type="checkbox" 
            checked={numAllowed} 
            onChange={()=>setNumAllowed((prev)=>!prev)} 
            className='cursor-pointer'/>
          <label htmlFor="" className='mr-25 ml-2'>Numbers</label>
          <input type="checkbox" 
            checked={charAllowed} 
            onChange={(prev)=>{setCharAllowed(prev.target.checked)}} 
            className='cursor-pointer'/>
          <label htmlFor="" className='ml-2'>Characters</label>
          </div>
        </div>
    </>
  )
}

export default App
