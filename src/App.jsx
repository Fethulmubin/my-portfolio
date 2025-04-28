import React from 'react'
import Hero from './sections/Hero/Hero'
import Project from './components/Projects/Project'
import NavBar from './components/NavBar'
import Experience from './sections/Hero/Experience/Experience'
import Contact from './components/Contact'
import TechStack from './components/TechStack'

const App = () => {
  return (
    <>
     <NavBar/>
      <Hero/>    
      <Project/>
      <TechStack/>
      <Experience/>
      <Contact/>
    </>
  )
}

export default App