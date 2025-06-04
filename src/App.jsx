import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactPage from "./components/ContactPage";
import ContactMe from "./components/ContactMe";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  
useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on refresh
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="home"><Home /></div> 
                <div id="skills"><Skills /></div> 
                <div id="experience"><Experience /></div> 
                <div id="projects"><Projects /></div> 
                <div id="contact"><ContactMe /></div> 
              </>
            }
          />

          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
