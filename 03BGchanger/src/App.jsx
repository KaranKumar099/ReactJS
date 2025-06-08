import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div className='w-screen h-screen' style={{backgroundColor: color}}>
        <h1 className='rounded-full text-white text-2xl p-5 text-center w-full'>Background Changer</h1>
        <div className='flex flex-col items-end pr-3 gap-4'>
          <button className="bg-[#fb2c36] rounded-2xl w-20 p-2 cursor-pointer outline-1" onClick={()=>setColor("#fb2c36")}>red</button>
          <button className="bg-[yellow] rounded-2xl w-20 p-2 cursor-pointer outline-1" onClick={()=>setColor("oklch(90.5% 0.182 98.111)")}>yellow</button>
          <button className="bg-[royalblue] rounded-2xl w-20 p-2 cursor-pointer outline-1" onClick={()=>setColor("oklch(62.3% 0.214 259.815)")}>blue</button>
          <button className="bg-[green] rounded-2xl w-20 p-2 cursor-pointer outline-1" onClick={()=>setColor("oklch(72.3% 0.219 149.579)")}>green</button>
          <button className="bg-[pink] rounded-2xl w-20 p-2 cursor-pointer outline-1" onClick={()=>setColor("oklch(59.2% 0.249 0.584)")}>pink</button>
          <button className="bg-[orange] rounded-2xl w-20 p-2 cursor-pointer outline-1" onClick={()=>setColor("orange")}>orange</button>
          <button className="bg-[purple] rounded-2xl w-20 p-2 cursor-pointer outline-1" onClick={()=>setColor("purple")}>purple</button>
          <button className="bg-[cyan] rounded-2xl w-20 p-2 cursor-pointer outline-1" onClick={()=>setColor("cyan")}>cyan</button>
          <button className="bg-[indigo] rounded-2xl w-20 p-2 cursor-pointer outline-1" onClick={()=>setColor("indigo")}>indigo</button>
          <button className="bg-[teal] rounded-2xl w-20 p-2 cursor-pointer outline-1" onClick={()=>setColor("teal")}>teal</button>
          <button className="bg-[chocolate] rounded-2xl w-20 p-2 cursor-pointer outline-1" onClick={()=>setColor("chocolate")}>chocolate</button>
          <button className="bg-[plum] rounded-2xl w-20 p-2 cursor-pointer outline-1" onClick={()=>setColor("plum")}>plum</button>
          <button className="bg-[lavender] rounded-2xl w-20 p-2 cursor-pointer outline-1" onClick={()=>setColor("lavender")}>lavender</button>
        </div>
      </div>
    </>
  )
}

export default App
