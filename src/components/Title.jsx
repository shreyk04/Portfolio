import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { imageVariant } from '../animations/motionVariants'
import {motion} from 'framer-motion'

function Title({text}) {

  const {ref,controls}=useScrollAnimation()
  return (
    <motion.div ref={ref} className="text-4xl md:text-6xl font-bold my-4 text-white " variants={imageVariant} initial="hidden" animate={controls}>{text}</motion.div>
  )
}

export default Title