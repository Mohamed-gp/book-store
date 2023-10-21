import React, { useState } from 'react'
import cartctx from './cartcontext'

const CartProvider = ({children}) => {
    // card items
    const [cartitems,setcartitems] = useState([])
    
    // add to cart 
    const addtocart = (item) => {
        
        setcartitems(prev => [...prev,item])
      
    }

    //remove from cart
    const removefromcart = (id) => {
        
        const data = cartitems.filter(e => e.id != id)

        setcartitems(data)
    }

    const globalData = {cartitems , addtocart , removefromcart}
  return (
    <cartctx.Provider value={globalData}>
        {children}
    </cartctx.Provider>
  )
}

export default CartProvider