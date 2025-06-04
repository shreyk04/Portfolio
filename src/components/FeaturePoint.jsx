import { CheckCircleIcon } from '@heroicons/react/16/solid'
import React from 'react'

function FeaturePoint({text}) {
  return (
    <li className='mb-2 flex justify-start items-start text-gray-300'>
        <CheckCircleIcon className="md:w-3 w-12 text-blue-500 inline-block mr-2" />
        <span className='text-gray-400  '>{text}</span>
    </li>
  )
}

export default FeaturePoint