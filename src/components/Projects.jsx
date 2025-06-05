import React from 'react'
import ProjectCard from './ProjectCard'
import Title from './Title'

const projects=[
    {
        title:"Marathi Biodata Maker",
        description:"A user-friendly online tool that enables Marathi-speaking individuals to create professional, culturally relevant marriage biodatas quickly and easily — without needing technical skills.",
        howItHelps:"It simplifies the often complex and time-consuming process of making biodatas by providing customizable templates and seamless language translation. Users can save their progress automatically and download biodatas in multiple formats for easy sharing with families and marriage prospects, ensuring a smooth and stress-free experience.",
        features:[
            "Fully responsive design tailored for Marathi users.",
            "Secure payments integration via Razorpay for premium templates.",
            "Real-time English-to-Marathi translation powered by Google Translate API.",
            "Persistent form data saved locally to prevent data loss.",
            "Professionally styled templates with optimized typography.",
            "Export biodata as PDF or image for versatile sharing options."
        ],
        techStack:["Next.js", "TypeScript", "Tailwind CSS", "Razorpay", "Google Translate API"],
        githublink:"https://github.com/shreyk04/marathi-biodata-maker",
        livelink:"https://marathi-biodata-creator-sigma.vercel.app/"
    },
    {
        title:"Dynamic 3D Shirt Customizer",
        description:"An interactive web application that allows users to design and personalize 3D shirt models in real time with live previews.",
        howItHelps:"This tool brings product customization to life by letting users experiment with colors, logos, and decals before purchase or production. It eliminates guesswork and enhances user engagement by providing instant visual feedback, making online shopping and design more fun, creative, and confidence-inspiring.",
        features:[
            "Real-time 3D rendering of customizable shirt models.",
            "Easy color selection and logo/graphic placement.",
            "Image export functionality to save final designs.",
            "Performance-optimized 3D visuals for quick load and smooth interaction."
        ],
        techStack:["React Three Fiber", "React.js", "Tailwind CSS"],
        githublink:"https://github.com/shreyk04/shirt-configurator-r3f",
        livelink:"https://shirt-configurator-r3f.vercel.app/"

    },
    {
        title:"TMDB Clone",
        description:"A movie discovery web platform that aggregates trending, top-rated, and upcoming films using The Movie Database (TMDB) API.",
        howItHelps:"It offers movie lovers a centralized place to explore and search for films easily, discover new releases, and filter content by genre or cast — all through an intuitive, mobile-friendly interface. The platform enhances entertainment choices and keeps users updated with the latest cinematic offerings.",
        features:[
            "Showcases trending, top-rated, and upcoming movies dynamically.",
            "Search and filter options to quickly find favorite movies or actors.",
            "Responsive design ensures great experience on any device.",
            "Modular, reusable components for scalability and maintainability."
        ],
        techStack:["React.js", "TMDB REST API", "CSS3"],
        githublink:"https://github.com/shreyk04/Movie_App",
        livelink:"https://shreyk04.github.io/Movie_App/"

    },
    {
        title:"Haunted House",
        description:"A visually immersive 3D haunted house experience built using Three.js. This project simulates a spooky environment with dynamic lighting, atmospheric effects, and interactive camera controls for a cinematic web experience.",
        howItHelps:"It offers movie lovers a centralized place to explore and search for films easily, discover new releases, and filter content by genre or cast — all through an intuitive, mobile-friendly interface. The platform enhances entertainment choices and keeps users updated with the latest cinematic offerings.",
        features:[
            "Created a fully navigable haunted house scene using Three.js with detailed 3d models and textures.",
            "Includes animated lights, color gradients, and environmental effects to enhance the haunted atmosphere.",
           
        ],
        techStack:["Three.js"],
        githublink:"https://github.com/shreyk04/Haunted_House",
        livelink:"https://haunted-house-iota-murex.vercel.app/"

    }
    
]
// What it is:
// A user-friendly online tool that enables Marathi-speaking individuals to create professional, culturally relevant marriage biodatas quickly and easily — without needing technical skills.

// How it helps:
// It simplifies the often complex and time-consuming process of making biodatas by providing customizable templates and seamless language translation. Users can save their progress automatically and download biodatas in multiple formats for easy sharing with families and marriage prospects, ensuring a smooth and stress-free experience.

// Tech Stack: Next.js, TypeScript, Tailwind CSS, Razorpay, Google Translate API

// Key Features:

// Fully responsive design tailored for Marathi users.

// Secure payments integration via Razorpay for premium templates.

// Real-time English-to-Marathi translation powered by Google Translate API.

// Persistent form data saved locally to prevent data loss.

// Professionally styled templates with optimized typography.

// Export biodata as PDF or image for versatile sharing options.



// ---

// 2. Dynamic 3D Shirt Customizer

// What it is:
// An interactive web application that allows users to design and personalize 3D shirt models in real time with live previews.

// How it helps:
// This tool brings product customization to life by letting users experiment with colors, logos, and decals before purchase or production. It eliminates guesswork and enhances user engagement by providing instant visual feedback, making online shopping and design more fun, creative, and confidence-inspiring.

// Tech Stack: React Three Fiber, React.js, Tailwind CSS

// Key Features:

// Real-time 3D rendering of customizable shirt models.

// Easy color selection and logo/graphic placement.

// Image export functionality to save final designs.

// Performance-optimized 3D visuals for quick load and smooth interaction.



// ---

// 3. TMDB Clone

// What it is:
// A movie discovery web platform that aggregates trending, top-rated, and upcoming films using The Movie Database (TMDB) API.

// How it helps:
// It offers movie lovers a centralized place to explore and search for films easily, discover new releases, and filter content by genre or cast — all through an intuitive, mobile-friendly interface. The platform enhances entertainment choices and keeps users updated with the latest cinematic offerings.

// Tech Stack: React.js, TMDB REST API, CSS3

// Key Features:

// Showcases trending, top-rated, and upcoming movies dynamically.

// Search and filter options to quickly find favorite movies or actors.

// Responsive design ensures great experience on any device.

// Modular, reusable components for scalability and maintainability.


function Projects() {
  return (
    <section className='w-full flex flex-col gap-4 mt-10 justify-center items-center '>
        <div className=" mx-auto w-full   p-8 ">
            {/* <h1 className="text-cyan-700 text-7xl font-medium mb-8">Projects</h1> */}
            <Title text="Projects"/>
            <div className="flex flex-wrap  gap-12   w-full h-full md:justify-center md:items-center"> 
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
            </div>
        </div>


    </section>
  )
}

export default Projects