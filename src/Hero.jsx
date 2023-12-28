import React from 'react'
import { motion } from 'framer-motion';
import image from './images/image.jpg'




const Hero = () => {
  const textVariants = {
    hidden: { 
        scale: 0.8,
        opacity: 0,
        color: "#ff4081", // Initial color
    },
    visible: { 
        scale: 1.0, // Slightly larger than normal to add emphasis
        opacity: 1,
        color: "#00e676", // End color
        transition: {
            duration: 1.5,
            type: "spring", // Adds a spring effect to the animation
            stiffness: 260,
            damping: 20
        }
    }
};

  return (
    <div className='hero wrappers'>
       <div className="hero-cta">
       <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="animated-text"
        >
       <p className='hello'>HELLO :)</p>
       </motion.div>
        <h1>I'M MUQADAS</h1>
   
               <h3>A FRONT-END DEVELOPER</h3>
  
     
        <p className='based'>Based in CA, US</p>
        

       <div className='btn-container'>
       <button className='cta-btn'>CONTACT</button>
        <button className='cta-btn'>GET CV</button>
      
       </div>
       </div>
      <motion.div
       className="hero-img-container"
       variants={textVariants}
       initial="hidden"
       animate="visible"
       >
      <img src={image} className='hero-img' alt="" />
      </motion.div>

    </div>
  )
}

export default Hero