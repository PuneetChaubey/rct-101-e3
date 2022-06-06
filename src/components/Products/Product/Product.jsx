import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = () => {
  // Note: this id should come from api
  const {cardProd,prod} = useContext(CartContext)
  console.log(cardProd)
  const product = { id: 1 };
  return (
    <div>
     {
       cardProd.map((p)=>{
        return  <div data-cy={`product-${p.id}`}>
           <h3 data-cy="product-name">{p.name}</h3>
           <h6 data-cy="product-description">{p.description}</h6>
           <button data-cy="product-add-item-to-cart-button">+</button>
           <div>
             <button data-cy="product-increment-cart-item-count-button">+</button>
             <span data-cy="product-count">
               {
                 // Count here from CartItems
               }
             </span>
             <button data-cy="product-decrement-cart-item-count-button">-</button>
             <button data-cy="product-remove-cart-item-button">Remove</button>
           </div>
         </div>
       })
     }
    </div>
    // <>
    //
    
     
    // </>
   
  );
};

export default Product;
