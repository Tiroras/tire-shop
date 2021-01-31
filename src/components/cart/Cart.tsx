import React from 'react';
import CartItemsContainer from "./cart-items/CartItems.container";
import GoToPurchaseContainer from "./go-to-purchase/GoToPurchase.container";


const Cart = () => {
  return(
    <div>
      <CartItemsContainer />
      <GoToPurchaseContainer />
    </div>
  )
}

export default Cart;