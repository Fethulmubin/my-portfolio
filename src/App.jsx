import React from 'react'
import Hero from './sections/Hero/Hero'
import Project from './components/Projects/Project'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
     <NavBar/>
      <Hero/>  
      <Project/>
    </>
  )
}

export default App