import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {

  const[activeItem,setActiveItem]=useState("home")


  const navigate=useNavigate();
  const location=useLocation();
  const navItems=[
    {id:"home",label:"Home"},
    {id:"experience",label:"Experience"},
    {id:"projects",label:"Projects"},
    {id:"skills",label:"Skills"},
    {id:"contact",label:"Contact"}
  ]

  const handleNavClick=(sectionId)=>{
     setActiveItem(sectionId)
     
if (location.pathname !== "/") {
      navigate("/");
      // Delay scroll to allow route change
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "smooth" });
    }

  }
  return (
    <div className="w-full z-50  flex justify-center items-center">
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-blue-950   shadow-md w-[32vw] rounded-full mt-2 z-50">
        <ul className="flex gap-6 justify-center py-2 text-md ">
          {
            navItems.map((item)=>(
           <li className="cursor-pointer" key={item.id} onClick={()=>handleNavClick(item.id)}>
            <a href={`#${item.id}`} className={`hover:font-semibold ${activeItem===item.id? "bg-white text-blue-950 rounded-4xl p-1":"text-white"}`}>
              {item.label}
            </a>
          </li>
            ))
          }
          
        
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
