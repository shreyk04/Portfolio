import React from 'react'
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Title from './Title'


const skills=[
    {name:"React.js",icon: <FaReact className="text-blue-600" />},
    {name:"JavaScript", icon: <FaJs className="text-yellow-600" />},
    {name:"HTML5", icon: <FaHtml5 className="text-orange-600" />},
    {name:"CSS3", icon: <FaCss3Alt className="text-blue-500" />},
    {name:"Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />},
    {name:"TypeScript", icon: <SiTypescript className="text-blue-600" />},
    {name:"Next.js", icon: <SiNextdotjs className="text-blue-600" />},
]

function Skills() {
  return (
   <section className=' text-white'>
    <div className="w-full md:h-[100vh] flex flex-col gap-4 my-6">
      <div className="flex flex-col p-8 h-full ">
                    <Title text="Skills"/>

        <p className="text-[1.3rem] my-3">
          Here are some of the technologies I work with:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center bg-indigo-950 p-4 mb-10 rounded-xl shadow-md hover:scale-105 transition-transform">
             <div className='text-5xl mb-2'> 
                {skill.icon}
                </div> 
              <p className="">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
   </section>
  )
}

export default Skills