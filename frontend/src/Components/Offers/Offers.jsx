import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/photos - Copy/exclusive_image.jpeg'

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON  BEST  SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className='offers_right'>
            <img src={exclusive_image} alt="" />
        </div>
      
    </div>
  )
}

export default Offers
