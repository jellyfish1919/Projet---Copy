import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/photos - Copy/logo-icon1.webp'
import card_icon from '../Assets/photos - Copy/card_icon.png'
import icon  from '../Assets/photos - Copy/icon-shop.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
   const [menu,setMenu]=useState("shop");
  return (
    <div className='navbar'>
      <div className="nav-logo" >
        <img src={logo} alt=""/>
        <p>Shopper</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to  ='/'>shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}}to='/mens'> men</Link> {menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}}to="womens">women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}to='/kids'>kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      {/* <div className="nav-login-cart">
       <link to='/login'><button>Login</button></link> 
       <link to='/cart'><img src={cart_icon} alt="" /></link>
       <link to='/icon'><img src={icon} alt="" className="shop-icon" /></link>
       <div className="nav-cart-count">0</div> */}
         <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={card_icon} alt="Cart Icon" /></Link>
        <Link to='/icon'><img src={icon} alt="Shop Icon" className="shop-icon" /></Link>
        <div className="nav-cart-count">0</div>

        

        
      </div>

      
    </div>
  )
}

export default Navbar
