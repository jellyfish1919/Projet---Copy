import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import Newcollections from '../Components/Newcollections/Newcollections'
import Newsletter from '../Components/Newsletter/Newsletter'
// import Foter from '../Components/Footer/Footer'



const Shop = () => {
  return (
    <div>

      <Hero/>
   <Popular/>
   <Offers/> 
   <Newcollections/>
   <Newsletter/>
   {/* <Foter/> */}


    </div>
  )
}

export default Shop
