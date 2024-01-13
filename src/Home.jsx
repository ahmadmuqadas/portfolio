import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import About from './About'
import Projects from './Projects'
import projectsData from './ProjectsData'


const Home = () => {
  return (
    <div className='home-wrapper'>
        <Navbar/>
        <Hero/>
        <About/>
    
        <Projects url={projectsData.resturant.url} projectName={projectsData.resturant.name}/>
        </div>
  )
}

export default Home