import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";
function App() {
  return (
    <div className="grid gap-4 bg-[#0a192f]">
      <Navbar />
      <Home />
      <About />
      <div className="m-2" >
        <Skills />
      </div>
      <div className="m-3">
        <Work />
      </div>
      <div className="m-3">
        <Contact />
      </div>
    </div>
  );
}

export default App;
