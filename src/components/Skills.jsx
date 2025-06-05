import React from 'react'
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Title from './Title'
import {motion} from "framer-motion"
import { bounceVariants, imageVariant, textVariants } from '../animations/motionVariants'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const skills=[
    {name:"React.js",icon: <FaReact className="text-cyan-300" />},
    {name:"JavaScript", icon: <FaJs className="text-yellow-300" />},
    {name:"HTML5", icon: <FaHtml5 className="text-orange-400" />},
    {name:"CSS3", icon: <FaCss3Alt className="text-blue-500" />},
    {name:"Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />},
    {name:"TypeScript", icon: <SiTypescript className="text-blue-600" />},
    {name:"Next.js", icon: <SiNextdotjs className="text-blue-600" />},
]

function Skills() {
  const {ref,controls}=useScrollAnimation({amount:0.1})
  return (
   <section className=' text-white w-full'>
    <div className="w-full md:h-[100vh] flex flex-col gap-4 my-6">
      <div className="flex flex-col p-8 h-full ">
                    <Title text="Skills"/>

        <p className="text-[1.3rem] my-3">
          Here are some of the technologies I work with:
        </p>
        <motion.div  className="flex flex-col md:flex-row md:mt-32 gap-7" variants={imageVariant} initial="hidden" animate={controls} ref={ref}>
          {skills.map((skill, index) => (
            <motion.div  key={index} className="flex flex-col  w-full md:w-[50%] items-center  p-4 mb-10 bg-blue-950 rounded-xl shadow-md hover:scale-105 transition-transform" variants={bounceVariants(index)} animate="animate" 
            
            >
             <div className='text-7xl mb-2'> 
                {skill.icon}
                </div> 
              <p className="">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
   </section>
  )
}

export default Skills