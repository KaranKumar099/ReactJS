import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Header() {
  return (
    <div className='flex justify-between items-center bg-[#222222] text-white py-5 px-20'>
        <Link to={"/"} className='text-2xl'>AtlasX</Link>
        <div className='flex gap-5'>
            <NavLink to="/" className={({isActive})=>
              `${isActive ? 'text-orange-600' : 'text-white'}`
            }>Home</NavLink>
            <NavLink to="/about" className={({isActive})=>
              `${isActive ? 'text-orange-600' : 'text-white'}`
            }>About</NavLink>
            <NavLink to="/navigate" className={({isActive})=>
              `${isActive ? 'text-orange-600' : 'text-white'}`
            }>Navigate</NavLink>
            <NavLink to="/contact" className={({isActive})=>
              `${isActive ? 'text-orange-600' : 'text-white'}`
            }>Contact Us</NavLink>
        </div>
    </div>
  )
}

export default Header