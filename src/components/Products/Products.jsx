import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Products = () => {
 
  const {prod, handleClick}= useContext(CartContext)

  return <div>
    <Link to="/product">Product</Link>
   {
     prod.map((p)=>{
       return <div key={p.id}>
         <h4>{p.name}</h4>
         <button onClick={()=>{handleClick(p)}}>Add To cart</button>
         
         </div>
     })
   }
  </div>;
};

export default Products;
