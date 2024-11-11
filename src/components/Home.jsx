import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for React Router navigation
import Logo from '../assets/logo.png'; // Import logo image
import Herobg from '../assets/editor.svg'; // Import hero image
import { FaArrowCircleRight } from 'react-icons/fa'; // Import icon for button
import Navabr from './Nav'
import Languages from './Languages';
import Aboutus from './Aboutus';

function Home() {
  return (
    <div>
    <header className='w-full pt-20  flex flex-col items-center bg-gradient-to-t to-slate-900 via-slate-400 from-slate-100'>
      <div className='flex w-[85%] h-full justify-around flex-col items-center gap-10'>
        <div className='flex flex-col gap-12 items-center w-[70%] h-[70%]'>
          <div>
            <h1 className='text-6xl text-gray-200 font-sans text-center mt-20'>Welcome to CODEX.code</h1>
            <h2 className='text-2xl text-gray-300 font-sans text-center mt-5'>
              The best code editor for all your programming needs
            </h2>
          </div>
          <Link to="/CodeEditor" className='w-48 h-16 bg-sky-800 hover:bg-sky-900 duration-500 border-black/50 border-[2px] rounded-md flex justify-center gap-4 items-center text-xl group' onClick={()=>{window.scrollTo({ top: 0, behavior: "smooth" });}}>
            Get Started
            <div className='group-hover:translate-x-2 duration-500'>
              <FaArrowCircleRight />
            </div>
          </Link>
        </div>
        <div className='relative w-[50em] h-[30em] flex justify-center items-end'>
          <img src={Herobg} className='relative z-40 w-[78%]' alt="hero background" />
          <div className='absolute top-0 z-20 bg-white/10 w-[93%] h-full rounded-2xl shadow-xl'></div>
          <div className='absolute z-30 bg-white/15 w-[83%] h-[95%] rounded-t-2xl shadow-xl'>
          
          </div>
        </div>
      </div>
    </header>
      <Languages/>
      <Aboutus/>
    </div>
  );
}

export default Home;
