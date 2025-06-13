import React from 'react'
import {FaArrowRight} from "react-icons/fa6"
import earth from '../assets/Earth_Spinning.mp4'

function Home() {
  return (
    <>
      <div className='bg-slate-700 text-white py-10 px-20 flex'>
        <div className= 'w-xl pr-10'>
          <h1 className='text-6xl text-red-600 uppercase font-bold'>The World at Your Fingertips</h1>
          <h1 className='text-xl leading-9 mt-6'>From flags to facts, discover what makes each nation unique with a click or tap.</h1>
          <button className='border-1 border-white py-2 px-5 rounded-full flex items-center gap-2 text-xl mt-20'>
            Start Exploring <FaArrowRight /></button>
        </div>
        <video autoPlay loop muted playsInline controls={false} width="700">
          <source src={earth} type="video/mp4" />
        </video>
      </div>

    </>
  )
}

export default Home