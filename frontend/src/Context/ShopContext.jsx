import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/photos - Copy/all-product";


export const ShopContext = createContext(null);
const getDefaultCart =()=>{
    let cart ={};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]= 0;
        return cart;
        
    }
}
const  ShopContextProvider = (props) =>{

    const [carItems,setCartItems]= useState(getDefaultCart());

  
    const addToCart =(itemID) =>{
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID]+1}))
        console.log(carItems)
    }
  
    const removeFromCart =(itemID) =>{
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID]-1}))
    }
    

    const contextValue ={all_product,carItems,addToCart,removeFromCart};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
            </ShopContext.Provider>
    )

}
export default  ShopContextProvider ;   