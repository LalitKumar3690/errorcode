import React from 'react';

const projects = [
  {
    title: "Ronak Prajapat",
    description: "Designing and building destinations that offer entertainment, recreation, and relaxation in perfect harmony.",
    image: "https://placehold.co/600x400?text=Leisure+%26+Themed+Projects",
    alt: "Leisure & Themed Projects Image",
  },
  {
    title: "Lalit Kumar",
    description: "Creating luxurious that blend exquisite design with unmatched hospitality, offering unforgettable getaways.",
    image: "https://placehold.co/600x400?text=Hospitality+Projects",
    alt: "Hospitality Projects Image",
  },
  {
    title: "Bhawani Shankar",
    description: "Crafting immersive spaces that celebrate heritage and artistry, fostering cultural understanding and appreciation.",
    image: "https://placehold.co/600x400?text=Museums+%26+Pavilions",
    alt: "Museums & Pavilions Image",
  },
  
];

function ProjectCard({ title, description, image, alt }) {
  return (
    <div className="max-w-md  overflow-hidden shadow-lg m-4 bg-gray-600 rounded-lg">

      <img className="w-full rounded-t-lg" src={image} alt={alt} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{title}</div>
        
      </div>
      <div className="px-6 pt-4 pb-2 text-center">
        
      </div>
    </div>
  );
}

function Aboutus() {
  return (
    <div className='w-full h-full bg-gradient-to-t to-slate-400  from-slate-400'>
    <div className="container flex flex-col gap-24 mx-auto h-[75vh] justify-center items-center">
      <h1 className='w-2/4 border-b-2 h-24 border-gray-500 text-center text-6xl text-gray-800 font-semibold'>Team Members</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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