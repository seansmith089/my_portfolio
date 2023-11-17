import "./App.css";

// NAVBAR IMPORT
import Navbar from "./Components/Navbar/Navbar";

// PAGES IMPORT
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Thanks from "./pages/Thanks/Thanks";
import NavScreenBlur from "./Components/Navbar/NavScreenBlur";

import { Routes, Route } from "react-router";
import { useState } from "react";
import useViewport from "./CustomHooks/UseViewport";


function App() {

    const [navBlur, setNavBlur] = useState(false)

    const {width, breakpoint_medium} = useViewport()

    function changeBlur(){
        if(width < breakpoint_medium){
            setNavBlur(() => !navBlur);
        }else return 
    }
    
  return (
    <>
      <Navbar navBlur={navBlur} changeBlur={changeBlur} />
      <NavScreenBlur navBlur={navBlur} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
}

export default App;
