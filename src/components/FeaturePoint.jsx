import { CheckCircleIcon } from '@heroicons/react/16/solid'
import {motion } from 'framer-motion';
import React, { useRef } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { textVariants } from '../animations/motionVariants';

function FeaturePoint({text}) {

  const {ref,controls}=useScrollAnimation()
 

  return (
    <motion.li className='mb-2 flex justify-start items-start text-gray-300' ref={ref}  variants={textVariants}
    initial="hidden"
    animate={controls}>
        <CheckCircleIcon className="md:w-3 w-12 text-blue-500 inline-block mr-2" />
        <span className='text-gray-400  '>{text}</span>
    </motion.li>
  )
}

export default FeaturePoint