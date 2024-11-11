import React from 'react'
import Logo from '../assets/logo.png'
import Herobg from '../assets/editor.svg'
import { FaArrowCircleRight } from "react-icons/fa";
// import { Link } from 'react-router-dom';

function Home() {
  return (
    <header className='w-full h-screen flex flex-col items-center bg-gradient-to-t to-slate-900 via-slate-400 from-slate-100'>  
    
      <nav className='w-full  h-28 flex justify-center items-end '>
        <div className='w-[80%] fixed z-50 top-0 flex h-16 justify-between items-center'>
           <div className='flex h-full items-center gap-2 cursor-pointer'>
                <img src={Logo} className='w-1/2 h-full '></img>
                <h1 className='text-gray-300 text-2xl font-sans'>CODEX.code</h1>
            </div>
            <ul className='flex gap-10 text-gray-200 text-lg items-center'>
                <a href='/' onClick={()=>window.scrollToView({top:'0', behavior:'smooth'})}> <li className='w-max group cursor-pointer '>Home<div className='w-0 group-hover:w-full h-[1px] bg-white/50 duration-500'></div></li></a>
                <li className='w-max group cursor-pointer '>Docs<div className='w-0 group-hover:w-full h-[1px] bg-white/50 duration-500'></div></li>
                 <li className='w-max group cursor-pointer '>About us<div className='w-0 group-hover:w-full h-[1px] bg-white/50 duration-500'></div></li>
                <button className='border-[2px] border-gray-500 text-gray-400 hover:border-gray-300 hover:text-gray-200 hover:scale-105 duration-300 rounded-md px-4 py-2'>Contact us</button>
            </ul>
        </div>
      </nav>
      <div className='flex w-[85%] h-full justify-around flex-col items-center'>
        <div className='flex flex-col gap-12 items-center w-[70%] h-[70%]'>
            <div>
            <h1 className='text-6xl text-gray-200 font-sans text-center mt-20'>Welcome to CODEX.code</h1>
            <h2 className='text-2xl text-gray-300 font-sans text-center mt-5'>The best code editor for all your programming needs</h2>
            </div>
            <button className='w-48 h-16 bg-sky-800 hover:bg-sky-900 duration-500 border-black/50 border-[2px] rounded-md flex justify-center gap-4 items-center text-xl group'>Get Started<div className='group-hover:translate-x-2 duration-500'><FaArrowCircleRight/></div> </button>
        </div>
        <div className='relative w-[55%] h-[60%] flex justify-center items-end'>
            <img src={Herobg} className='relative z-50 w-[90%] h-[90%]'></img>
            <div className='absolute top-0 z-30  bg-white/10 w-[93%] h-full rounded-2xl shadow-xl'></div>
            <div className='absolute  z-40  bg-white/15 w-[83%] h-[95%] rounded-t-2xl shadow-xl'></div>
        </div>
      </div>
    </header>
  )
}

export default Home
