import React from 'react'

function ButtonWithArrow({text, livelink,color}) {
  return (
     <a
          href={livelink}
          target="_blank"
          rel="noopener noreferrer"
          className={`bg-blue-950 text-sm text-white px-4 py-2 rounded-lg transition-colors duration-300 md:ml-4 cursor-pointer w-36 text-center `}
          style={text === "Live Demo" ? { background: color } : {}}
        >
          {text}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 inline-block ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            />
          </svg>
        </a>
  )
}

export default ButtonWithArrow