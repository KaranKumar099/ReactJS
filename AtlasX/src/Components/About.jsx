import React from 'react'
import worldMap from '../assets/map.jpg'
import myPic from '../assets/karanPic.jpg'
import {Link} from 'react-router-dom'

function About() {
  return (
    <>
    <div className='bg-slate-700 text-white py-5 px-20 text-xl'>
      <div className='flex gap-8'>
        <div className='text-justify'>
          <h1 className='text-2xl mb-2 italic'>What is <span className='text-red-600 text-3xl'>AtlasX?</span></h1>
          <p><Link to="/" className='underline'>AtlasX</Link> is an interactive world exploration platform designed to make global discovery engaging and insightful. Whether you're a student, traveler, or just a curious mind, AtlasX lets you explore countries around the globe with a simple click or search.
          </p>
          <p>From population stats and number of states to global rankings and geographic insights — AtlasX breaks down every country into easy-to-understand data. With a visual world map and responsive design, users can interactively dive into the details of any nation, making learning about the world both fun and informative.
          </p>
        </div>
        <img src={worldMap} alt="world map image" width={400}/>
      </div>
      
      <div className='flex gap-8'>
        <div className='w-xl'>
          <img src={myPic} alt="karan picture" className='h-[85%]'/>
          <a href="#" className='text-[18px] hover:text-red-600 mr-7'>LinkedIn</a>
          <a href="#" className='text-[18px] hover:text-red-600 mr-7'>Github</a>
          <a href="#" className='text-[18px] hover:text-red-600'>Instagram</a>
        </div>
        <div className='text-justify'>
          <h1 className='text-2xl mb-2 italic'>Behind the Code: Why I Built AtlasX?</h1>
          <p>Hi, I’m <span className='text-red-600 italic'>Karan Kumar</span>, a <span className='text-red-600 italic'>BTech Computer Science</span> student with a passion for building user-friendly web applications. I created AtlasX as a way to combine my love for coding, design, and world geography into one immersive experience.
          </p>
          <p>While learning ReactJS, I wanted to build something beyond just a to-do app — something interactive, informative, and visually rich. That’s when the idea for AtlasX was born: a digital atlas where anyone can explore countries and their unique characteristics, all in one place.
          </p>
          <h2>This project helped me dive deeper into concepts like:</h2>
          <ul className='list-disc px-10'>
            <li>Component-based architecture</li>
            <li>API integration</li>
            <li>Data visualization</li>
            <li>Routing and state management</li>
          </ul>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default About