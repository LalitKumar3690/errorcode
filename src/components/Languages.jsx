import React from "react";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS if needed (for a Create React App setup, it should already be configured)
import Img1 from '../assets/hashtag.png'
import Img2 from '../assets/java-script.png'
import Img3 from '../assets/java.png'
import Img4 from '../assets/php-programming-language.png'
import Img5 from '../assets/python.png'
import Img6 from '../assets/typescript.png'

const Languages = () => {
    return (
        <div className="w-full h-full bg-gradient-to-t to-slate-100 via-sky-200 from-slate-400 py-10">
        <div className="container h-[76vh] items-center mx-auto p-4 md:p-8 gap-4 flex">
            <div className="text-left mb-8 w-1/2 flex flex-col gap-4">
                {/* <h2 className="text-pink-600 font-bold text-lg">INDUSTRIES WE WORK FOR</h2> */}
                <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
                    These Languages are supported
                </h1>
                <p className="text-gray-700 text-base md:text-lg">
                Our IDE supports popular programming languages to cover a variety of coding needs: Python for data science and automation, JavaScript for web development, TypeScript for building safer, scalable apps, Java for Android and enterprise projects, PHP for server-side web applications, and C# for Windows software and game development. Each language is equipped with essential features like syntax highlighting, code completion, and error checking to make coding easier and more efficient, especially for everyday development tasks.
                </p>
            </div>
            <div className="flex flex-wrap p-2  w-1/2 h-full">
                <div className="w-1/2 h-[25%] flex flex-col items-center gap-2 text-3xl font-semibold ">
                    <img src={Img1} alt="Hashtag" className="w-[90%] h-[90%] object-contain" />
                    <h1 className="text-black" >C#</h1>
                </div>
                <div className="w-1/2 h-[25%] flex flex-col items-center gap-2 text-3xl font-semibold">
                    <img src={Img2} alt="JavaScript" className="w-[90%] h-[90%] object-contain" />
                    <h1 className="text-black" >JavaScript</h1>
                </div>
                <div className="w-1/2 h-[25%] flex flex-col items-center gap-2 text-3xl font-semibold">
                    <img src={Img3} alt="Java" className="w-[90%] h-[90%] object-contain" />
                    <h1 className="text-black" >Java</h1>
                </div>
                <div className="w-1/2 h-[25%] flex flex-col items-center gap-2 text-3xl font-semibold">
                    <img src={Img4} alt="PHP" className="w-[90%] h-[90%] object-contain" />
                    <h1 className="text-black" >PHP</h1>
                </div>
                <div className="w-1/2 h-[25%] flex flex-col items-center gap-2 text-3xl font-semibold">
                    <img src={Img5} alt="Python" className="w-[90%] h-[90%] object-contain" />
                    <h1 className="text-black" >Python</h1>
                </div>
                <div className="w-1/2 h-[25%] flex flex-col items-center gap-2 text-3xl font-semibold">
                    <img src={Img6} alt="TypeScript" className="w-[90%] h-[90%] object-contain" />
                    <h1 className="text-black" >TypeScript</h1>
                </div>
            </div>
            
        </div>
        </div>
    );
};


export default Languages;