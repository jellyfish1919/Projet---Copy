import React from 'react'
import './Breadcums.css'
import arrow_icon from '../Assets/photos - Copy/Breadcums_arrow.png'

const Breadcums = (props) => {
  console.log(props)
    const product= props;
  return (
    <div className='breadcum'>
      HOME<img src={arrow_icon} alt="" /> 
      SHOP <img src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt="" />{product.name}
    </div>
  )
}

export default Breadcums
