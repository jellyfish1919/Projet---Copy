import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box-fade'>Reviews(122)</div>
        </div>
      <div className='descriptionbox-desciption'>
        <p>An e-commerce platform is a digital marketplace that allows businesses to sell products and services online. It provides essential features such as product listings, secure payment processing, order management, and customer support. Popular platforms like Shopify, WooCommerce, and Magento make it easy for businesses to create and manage their online stores. With the rise of online shopping, e-commerce platforms have become crucial for reaching a global audience, offering convenience to both businesses and customers. They also support various integrations, including marketing tools, analytics, and inventory management, making online selling more efficient and scalable.</p>
        <p>E-comerce website typically display products or serviuces and detailed descriptions, images , prices and any  avilible var (e.g., sizes, colors). Each product usally has its own deication with revalant information.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
