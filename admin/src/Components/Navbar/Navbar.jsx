import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/photos - Copy/nav-logo.jpg'
import navprofile from '../../assets/photos - Copy/nav-profile.jpeg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} alt="" className='nav-logo' />
      <img src={navprofile} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
