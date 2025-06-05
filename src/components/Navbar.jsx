import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (sectionId) => {
    setActiveItem(sectionId);
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll=()=>{
    if(menuOpen){
      setMenuOpen(false)
    }
    console.log("scrolling")
  }
console.log(menuOpen)
  useEffect(()=>{
     document.addEventListener("wheel",handleScroll)
     return ()=>{
      document.removeEventListener("wheel",handleScroll)

     }
  },[menuOpen])

  return (
    <div className="w-full z-50 flex justify-center items-center pointer-events-none">
      <nav className="fixed top-0 md:left-1/2 right-0  bg-blue-950/60 backdrop-blur-md border border-blue-800 shadow-lg w-fit sm:w-[80vw] md:w-[60vw] lg:w-[40vw] rounded-lg mt-4 z-50 px-4 mr-2 md:mr-0 py-2 pointer-events-auto">
        {/* Mobile Header */}
        <div className="flex justify-between items-center sm:hidden">
          <div className="text-white font-bold text-lg"></div>
          <button
            className="text-white text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Navigation Items */}
        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-2 sm:mt-0`}
        >
          {navItems.map((item) => (
            <li
              className="cursor-pointer text-center"
              key={item.id}
              onClick={() => handleNavClick(item.id)}
            >
              <a
                className={`hover:font-semibold transition-all duration-200 ${
                  activeItem === item.id
                    ? "bg-white text-blue-950 rounded-full px-3 py-1"
                    : "text-white"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;