import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/photos - Copy/logo-icon1.webp'
import instagram_icon from '../Assets/photos - Copy/instagram_icon.jpeg'
import whatsap_icon from '../Assets/photos - Copy/whatsapp_icon.avif'
import pintester_icon from '../Assets/photos - Copy/pintester_icon.png'

const Foter = () => {
  return (
    <div className='footer'> 
    <div className='footer-logo'>
      <img src={footer_logo} alt="" />
      <p>SHOPPER</p>
    </div>
    <ul className='footer-links'>
      <li>Company</li>
      <li>Products</li>
      <li>Offices</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    <div className='footer-social-icon'>
      <div className='footer-icons-container'>
        <img src={instagram_icon} alt="" />
      </div>
      <div className='footer-icons-container'>
        <img src={whatsap_icon} alt="" />
      </div>
      <div className='footer-icons-container'>
        <img src={pintester_icon} alt="" />
      </div>
    </div>
    <div className='footer-copyright'>
      <hr />
      <p>copyright @ 2023 - All Right Reserved </p>
    </div>
      
    </div>
  )
}

export default Foter
