import React from 'react';
import Logo from '../assets/logo.png'

const Footer = () => {
    return (
        <div className='w-full h-full bg-gray-500'>
        <footer className="py-16 w-full max-w-6xl mx-auto text-center ">
            <div className="text-center mb-8 flex justify-center">
                
            <div className='flex h-full items-center gap-2 cursor-pointer'>
                <img src={Logo} className='w-16 h-full '></img>
                <h1 className='text-gray-300 text-2xl font-sans'>CODEX.code</h1>
            </div>
            </div>
            <nav className="mb-8">
                <ul className="flex justify-center space-x-6 sm:space-x-12 text-gray-700 text-lg">
                    <li><a href="#" className="hover:text-gray-900 text-gray-100">Home</a></li>
                    <li><a href="#" className="hover:text-gray-900 text-gray-100">Docs</a></li>
                    <li><a href="#" className="hover:text-gray-900 text-gray-100">About</a></li>
                    <li><a href="#" className="hover:text-gray-900 text-gray-100">Contact us</a></li>
                    {/* <li><a href="#" className="hover:text-gray-900 text-gray-100">Help</a></li> */}
                </ul>
            </nav>
            <div className="mb-8">
                <hr className="border-t border-gray-300 w-1/2 sm:w-1/4 mx-auto" />
            </div>
            <div className="flex justify-center space-x-6 sm:space-x-8 mb-8 text-2xl">
                <a href="#" className="text-gray-100 hover:text-gray-900"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-100 hover:text-gray-900"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-gray-100 hover:text-gray-900"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-gray-100 hover:text-gray-900"><i className="fab fa-github"></i></a>
            </div>
            <div className="text-gray-100 text-lg">
                © Copyright 2021, All Rights Reserved
            </div>
        </footer>
        </div>
    );
}

export default Footer;