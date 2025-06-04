import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'

function ContactMe() {

    const navigate=useNavigate();
    const handleClick = () => {
        navigate('/contact');
    }
  return (
    <div>
        <section id="contact" className=" py-20">
            <div className="container w-full mx-auto px-4 flex flex-col  justify-center items-center">
            <h2 className="text-3xl text-white font-bold text-center mb-8">Get In Touch</h2>
            <p className="text-center text-xl text-gray-300 mb-6 w-[60%]">
                I'm currently available for freelance work or full-time positions. If you have a project that needs some creative work, feel free to contact me.
            </p>
            <div className="text-center">
               <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"  onClick={handleClick}>Contact Me</button>
            </div>
            </div>
        </section>
    </div>
  )
}

export default ContactMe