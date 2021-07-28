import React from 'react'


//Nested components

import About from './About'
import Skills from './Skills.js'
import Navbar from './Navbar.js'
import Education from './Education.js'
import Portfolios from './Portfolios'
import Contact from './Contact'
import Services from './services'

//App_Root_Components_Module
export default function App() {

  return (<>
    <Navbar />
    <About />
    <Skills />
    <Education />
    <Portfolios />
    <Services />
    <Contact />

  </>)
}

