import { Github, Linkedin, Mail } from 'lucide-react'
import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"
import { ToastContainer,toast } from 'react-toastify';
function ContactPage() {


  const form=useRef();
  const[status,setStatus]=useState("")
  const [loading,setLoading]=useState(false)


const sendEmail=(e)=>{
 e.preventDefault()
 setLoading(true)
 setStatus("")
 emailjs.sendForm('service_ya0li5u', 'template_9sgphu6', form.current, 'H4jH_LZ8gI_5YljE8')
 .then((result)=>{
  console.log(result.text);
  setStatus("Message sent successfully!")
  toast.success("Message sent successfully!")
  form.current.reset()
 }, (error) => {
  console.log(error.text);
  setStatus("Failed to send message. Please try again later.");
  toast.error("Failed to send message. Please try again later.");
 }
).finally(()=>{
  setLoading(false)
})
 
}



  return (
    <>
    <div className=" min-h-screen flex flex-col md:flex-row items-center gap-5 p-5 justify-center mt-20">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md w-[90%] md:w-[50%] text-xs md:text-xl">
        <h2 className="text-2xl font-bold mb-4 ">Contact Me</h2>
        <p className="text-gray-600  mb-6">I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out using the form or through any of my social profiles.</p>
        <div>
            <ul className="list-none">
                <li className='flex items-center '><Mail className='w-4 mr-2' /><a href="mailto:shreyakad2001@gmail.com" className="text-blue-500 hover:underline text-[0.7rem]">shreyakad2001@gmail.com</a></li>
                <li className='flex items-center'><Github className='w-4 mr-2' /><a href="http://github.com/shreyk04" className="text-blue-500 hover:underline text-[0.7rem]">GitHub</a></li>
                <li className='flex items-center'><Linkedin className='w-4 mr-2 text-gray-500' /><a href="https://www.linkedin.com/in/shreya-kad/" className="text-blue-500 hover:underline text-[0.7rem]">LinkedIn</a></li>
            </ul>
        </div>
      </div>

    <form action="" className='md:w-[50%] w-[90%]' ref={form} onSubmit={sendEmail}>
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="user_name" required className="p-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none" />
            </div>
            <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="user_email" required className="p-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none" />
            </div>
            <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows="4" required className="p-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer" disabled={loading}>{loading?"Sending... ":"Send Message"}</button>
            
            
            
        </div>
    </form>
    </div>
    
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

    </>
  )
}

export default ContactPage