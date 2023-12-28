import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import About from './About'
import Projects from './Projects'

const Home = () => {
  return (
    <div className='home-wrapper'>
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        </div>
  )
}

export default Home