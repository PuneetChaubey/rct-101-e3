import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [prod, setProd] = useState([])

  const [cardProd, setCardProd] = useState([]);
   const axios = require('axios').default;
 
   useEffect(() => {
   
   axios.get(" http://localhost:8080/products")
   .then((res)=>{
    
     setProd(res.data)
   })
 
 
 }, [])
 
 
 const handleClick =(a)=>{
   setCardProd([...cardProd, a])
 }
 
 




  return <CartContext.Provider value={{cardProd,prod, handleClick}}>{children}</CartContext.Provider>;



};
