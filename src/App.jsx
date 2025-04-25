import React from 'react'
import Hero from './sections/Hero/Hero'
import Project from './components/Projects/Project'
import NavBar from './components/NavBar'
import Experience from './sections/Hero/Experience/Experience'

const App = () => {
  return (
    <>
     <NavBar/>
      <Hero/>  
      <Project/>
      <Experience/>
    </>
  )
}

export default App