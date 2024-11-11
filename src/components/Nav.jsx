import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import Logo2 from '../assets/logo2.png'
import { useState, useEffect } from 'react';

function Nav() {
    const [scrolling, setScrolling] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 30) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };

      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  return (
    <div className={`w-full z-50 flex justify-center fixed ${scrolling ? 'bg-gray-100 text-gray-800 border-b-2 border-gray-600' : 'bg-transparent'}`}>
        <nav className='w-full h-20 pb-2 flex justify-center items-end'>
        <div className='w-[80%] flex h-16 justify-between items-center'>
            <Link to='/' onClick={()=>{window.scrollTo({ top: 0, behavior: "smooth" });}}>
          <div className='flex h-full items-center gap-2 cursor-pointer'>
            <img src={scrolling ? Logo2 : Logo} className='w-16 h-full duration-500' alt="logo" />
            <h1 className={`${scrolling ? 'text-gray-800' : 'text-gray-300'} duration-500 text-2xl font-sans`}>CODEX.code</h1>
          </div>
          </Link>
          <ul className={`flex gap-10 ${scrolling ? 'text-gray-900' : 'text-gray-200'} duration-500 text-lg items-center`}>
            <Link to="/" onClick={()=>{window.scrollTo({ top: 0, behavior: "smooth" });}}>
              <li className='w-max group cursor-pointer'>
                Home
                <div className={`w-0 group-hover:w-full  ${scrolling ? 'bg-gray-900 h-[2px]' : 'bg-white/50 h-[1px]'} duration-500`}></div>
              </li>
            </Link>
            <Link to="/Document" onClick={()=>{window.scrollTo({ top: 0, behavior: "smooth" });}}>
              <li className='w-max group cursor-pointer'>
                Docs
                <div className={`w-0 group-hover:w-full  ${scrolling ? 'bg-gray-900 h-[2px]' : 'bg-white/50 h-[1px]'} duration-500`}></div>
              </li>
            </Link>
            <Link to="/Aboutus" onClick={()=>{window.scrollTo({ top: 0, behavior: "smooth" });}}>
              <li className='w-max group cursor-pointer'>
                About us
                <div className={`w-0 group-hover:w-full  ${scrolling ? 'bg-gray-900 h-[2px]' : 'bg-white/50 h-[1px]'} duration-500`}></div>
              </li>
            </Link>
            <Link to="/contact" onClick={()=>{window.scrollTo({ top: 0, behavior: "smooth" });}}>
            <button className={`border-[2px] ${scrolling ? 'border-gray-400 text-gray-700 hover:border-gray-700 hover:text-gray-900' :  'border-gray-500 text-gray-400 hover:border-gray-300 hover:text-gray-200'} hover:scale-105 duration-300 rounded-md px-4 py-2`}>
              Contact us
            </button>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav