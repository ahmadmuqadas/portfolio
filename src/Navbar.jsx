import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

  const [isToggleOpen, setisToggleOpen] = useState(true)

  const toggleStyle = {
    top: isToggleOpen ? '0' : '-15rem' ,
    left: isToggleOpen ? '0' : '-10rem' ,
    width: isToggleOpen ? '100%' : '0', 
    borderBottomRightRadius: isToggleOpen ? '0' : '100px',
    borderTopRightRadius: isToggleOpen ? '0' : '100px',
    borderBottomLeftRadius: isToggleOpen ? '0' : '100px',
    borderBottom: 'solid black 1px',
   


  }

  const lineStyle = {
    width: isToggleOpen ? '20px' : '25px' ,
  }
  function handleToggle () {
    setisToggleOpen((prev) => !prev)
  }
  return (
   <div className='nav-container'>

<div className="burger-container" onClick={handleToggle}>
  <span className='burger-line' style={lineStyle}></span>
</div>
<code className='logo'>#LOGO</code>
    <div className='nav-links' style={toggleStyle}>
      <code className='logoTwo'>#LOGO 2</code>
     <ul className='nav-ul'>
     <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/'>ABOUT</NavLink></li>
      <li><NavLink to='/'>PROJECTS</NavLink></li>
      <li><NavLink to='/'>CONTACT</NavLink></li>
     </ul>
    </div>
   </div>
  )
}

export default Navbar