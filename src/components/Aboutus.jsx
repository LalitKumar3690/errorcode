import React from 'react';
import Deepak from '../assets/deepak.jpeg'
import Poonam from '../assets/poonam.jpeg'
import Mentor from '../assets/Mentor.jpg'


const projects = [
  {
    title: "Mr. Suman Kumar",
    image: Mentor,
    alt: "Image 1",
  },
  {
    title: "Deepak Sharma",
    image: Deepak,
    alt: "Image 2",
  },
  {
    title: "Poonam Panchariya",
    image: Poonam,
    alt: "Image 3",
  },
  
];

function ProjectCard({ title, description, image, alt }) {
  return (
    <div className="w-full  md:w-[20rem] h-[45vh] overflow-hidden shadow-lg m-4 bg-gray-600 rounded-lg">

      <img className="w-full h-[85%] object-cover rounded-t-lg" src={image} alt={alt} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{title}</div>
        
      </div>
    </div>
  );
}

function Aboutus() {
  return (
    <div className='w-full h-auto pt-32 bg-gradient-to-t to-slate-400  from-slate-400'>
    <div className="w-full px-10 flex flex-col mx-auto min-h-[75vh] justify-center items-center">
      <h1 className='w-4/5 md:w-2/3 2xl:w-2/4 border-b-2 pb-5 border-gray-500 text-center text-4xl  md:text-4xl xl:text-6xl text-gray-800 font-semibold'>Collaborators</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            alt={project.alt}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Aboutus;