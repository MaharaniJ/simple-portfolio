import React from 'react'
import  Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Work from './Work.jsx'
import Contact from './components/Contact.jsx'
function App() {
  return (
   <div>
<Navbar/>
<Home />
<About />
<Skills />
<Work />
<Contact />
    </div>
  )
}

export default App