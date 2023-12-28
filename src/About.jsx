import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import atom from './images/react.svg'
import reactRouter from './images/react-router.svg'
import sass from './images/sass.svg'
import sc from './images/file-type-styled.svg'
import gitHub from './images/github.svg'
import fireBase from './images/file-type-firebase.svg'


const About = () => {

  const Variants = {
    offscreen: {
      y: 200,
    },
    onscreen: {
      x: 0,
      y: 50,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 2
      }
    }
  };

  return (
  
    
<motion.div

viewport={{ once: true, amount: 0.1 }} 
         initial="offscreen"
         whileInView="onscreen"
         className='about-wrapper'
         variants={Variants}

 >

<h2>ABOUT ME! &#x1F603;</h2>
<h4>Expert in Web UI/UX Development</h4>
<p>I specialize in front-end development using HTML, CSS, and JavaScript to create engaging user experiences.</p>
<p>My toolkit includes <span className='about-icon-span'><strong>React</strong> <img src={atom} className='about-icon' alt="" /></span> for dynamic web application development, leveraging its efficiency and robustness. I incorporate <span className='about-icon-span'><strong>React Router</strong> <img src={reactRouter} className='about-icon' alt="" /></span> for seamless navigation.</p>
<p>To enhance development speed, I utilize <span className='about-icon-span'><strong>SASS</strong> <img src={sass} className='about-icon' alt="" /></span>, and for intricate styling logic, <span className='about-icon-span'><strong>Styled Components</strong> <img src={sc} className='about-icon' alt="" /></span> is my go-to choice. Despite these advanced tools, my passion for Vanilla CSS remains strong, valuing its simplicity and power.</p>
<p>I employ <span className='about-icon-span'><strong>Git/GitHub</strong> <img src={gitHub} className='about-icon' alt="" /></span> for version control, ensuring smooth collaboration and efficient workflow management with my team.</p>
<p>I am also proficient in leveraging <span className='about-icon-span'><strong>Firebase</strong> <img src={fireBase} className='about-icon' alt="" /></span> for scalable and secure backend services.</p>

</motion.div>

  )
}

export default About