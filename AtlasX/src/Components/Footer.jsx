import React from 'react'
import { Link } from 'react-router-dom'
import {PiLinkedinLogo, PiInstagramLogo, PiYoutubeLogo, PiFacebookLogo} from 'react-icons/pi'
import {TfiEmail, } from 'react-icons/tfi'
import {GoLocation, } from 'react-icons/go'
import {IoCallOutline, } from 'react-icons/io5'
// import {CiInstagram, } from 'react-icons/ci'

function Footer() {
  return (
    <div className='text-white'>
      <div className='bg-[#222222] flex flex-col gap-5 items-center lg:flex-row justify-around  py-10'>
        <Link to="/" className='text-5xl'>AtlasX</Link>
        <div className='flex justify-around lg:gap-30 w-full lg:w-fit'>
          <div className='flex flex-col'>
            <h1 className='text-xl italic '>Explore by continents</h1>
            <br></br>
            <a href="#" className='hover:text-red-400'>Africa</a>
            <a href="#" className='hover:text-red-400'>Asia</a>
            <a href="#" className='hover:text-red-400'>Europe</a>
            <a href="#" className='hover:text-red-400'>North America</a>
            <a href="#" className='hover:text-red-400'>South America</a>
            <a href="#" className='hover:text-red-400'>Oceania</a>
            <a href="#" className='hover:text-red-400'>Antarctica</a>
          </div>
          <div className='flex flex-col'>
            <h1 className='text-xl italic '>Support</h1>
            <br></br>
            <a href="#" className='hover:text-red-400'>Customer Support</a>
            <a href="#" className='hover:text-red-400'>Privacy Policy</a>
            <a href="#" className='hover:text-red-400'>Terms & Conditions</a>
            <Link to="/contact" className='hover:text-red-400'>Contact Us</Link>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-3'>
              <span className='text-4xl bg-red-500 p-3 rounded-full'><IoCallOutline /></span>
              <div>
                <h1>Contact Us:</h1>
                <h1>+91-790-660-7689</h1>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <span className='text-4xl bg-red-500 p-3 rounded-full'><TfiEmail /></span>
              <div>
                <h1>Email:</h1>
                <h1>AtlasX@business.com</h1>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <span className='text-4xl bg-red-500 p-3 rounded-full'><GoLocation /></span>
              <div>
                <h1>Reach Us:</h1>
                <h1>Sector-16 Mumbai</h1>
                <h1>Maharashtra India</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-black opacity-90 flex justify-between items-center px-20 h-18' >
        <h2>© 2025 World Explorer by Karan Kumar. All rights reserved.</h2>
        <div className='flex gap-4'>
          <h2 className='bg-red-600 h-[40px] w-[40px] text-2xl rounded-full grid place-items-center'><PiFacebookLogo /></h2>
          <h2 className='bg-red-600 h-[40px] w-[40px] text-2xl rounded-full grid place-items-center'><PiInstagramLogo /></h2>
          <h2 className='bg-red-600 h-[40px] w-[40px] text-2xl rounded-full grid place-items-center'><PiYoutubeLogo /></h2>
          <h2 className='bg-red-600 h-[40px] w-[40px] text-2xl rounded-full grid place-items-center'><PiLinkedinLogo /></h2>
        </div>
      </div>
    </div>
  )
}

export default Footer